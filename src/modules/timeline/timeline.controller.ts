import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TimelineService } from './timeline.service';
import { CreateTimelineDto } from './dto/create-timeline.dto';
import { UpdateTimelineDto } from './dto/update-timeline.dto';
const getRoundMap = (key: any) => {
  const map = new Map();
  map.set(0, '初赛');
  map.set(1, '复赛');
  map.set(2, '半决赛');
  map.set(3, '小决赛');
  map.set(4, '排位赛');
  map.set(5, '决赛');

  return map.get(key);
};

function timestampToDateTimeString(timestamp) {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hours = ("0" + date.getHours()).slice(-2);
  const minutes = ("0" + date.getMinutes()).slice(-2);
  return `${year}-${month}-${day} ${hours}:${minutes}`;
}
@Controller('timeline')
export class TimelineController {
  constructor(private readonly timelineService: TimelineService) {}

  @Post()
  create(@Body() createTimelineDto: CreateTimelineDto) {
    return this.timelineService.create(createTimelineDto);
  }

  @Post('generate')
  enter(@Body() createTimelineDto: any) {
    return this.timelineService.create(createTimelineDto.data);
  }

  @Get()
  async findAll(@Query() query) {
    const data=await  this.timelineService.findAll(query);
    return data.map((item)=>
      {
        const link=JSON.parse(item.item_sort_link)

        return {
          ...item,
          format_date:item.date?timestampToDateTimeString(item.date):0,
          content_name:link.item_name+' '+link.sort_name+''+getRoundMap(item.round_type)+'第'+(item.group_number)+'组'
        }

      }
     )
  }

  @Get('assign') 
  async assign(@Query() query){
    const data=await  this.timelineService.findAll(query);

    //  分组,

    const result = data.reduce((acc, item) => {
      const { round_type } = item;
      const groupIndex = acc.findIndex((group) => group.round_type === round_type);
    
      if (groupIndex !== -1) {
        acc[groupIndex].data.push(item);
      } else {
        const link=JSON.parse(item.item_sort_link)
        acc.push({
          round_type,
          race_track_number:item.race_track_number,
          title:link.item_name+' '+link.sort_name+''+getRoundMap(item.round_type),
          data: [item],
        });
      }
    
      return acc;
    }, []);

    function handler(ob){
        const data=ob.data;
        const res=[]
 
        for(let item of data){
            const {race_track_number}=item;
            for(let i=1;i<=race_track_number;i++){
              res.push({
                ...item,
                path:i,
                team_name:'',
                format_date:item.date?timestampToDateTimeString(item.date):0,
              })
            }
        }
        ob.data=res
    }

    for(let i=0;i<result.length;i++){
      handler(result[i])
    }

    return result
   
  }



  @Get('sort')
  async findAllT(@Query() query) {
    const data=await  this.findAll(query);

   
    const groupByDate = data
  .sort((a, b) => a.date - b.date) // 按时间戳排序
  .reduce((groups, item) => {
    const date = new Date(item.date * 1000);
    const dateString = date.toISOString().substring(0, 10); // 转换成日期字符串，例如 '2023-04-05'
    const group = groups.find((g) => g.title === dateString); // 查找该日期的分组
    if (group) {
      group.data.push({
        ...item,
        time: date.toLocaleTimeString(), // 将时间戳转换成时间字符串
      });
    } else {
      groups.push({
        title: dateString,
        data: [
          {
            ...item,
            time: date.toLocaleTimeString(),
          },
        ],
      });
    }
    return groups;
  }, []);

    return groupByDate
    
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.timelineService.findOne(+id);
  }

  @Patch()
  update(@Body() updateTimelineDto: UpdateTimelineDto) {
    return this.timelineService.update(updateTimelineDto);
  }

  @Delete()
  remove(@Body()delObj) {
    return this.timelineService.remove(delObj);
  }
}
