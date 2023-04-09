import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { TeamService } from '../team/team.service';


function filterGroupFirst(data) {
  // 将数据按组号进行分组
  const groups = data.reduce((acc, cur) => {
    if (!acc[cur.group_number]) {
      acc[cur.group_number] = [];
    }
    acc[cur.group_number].push(cur);
    return acc;
  }, {});

  // 遍历每个组，剔除得分最低的数据
  const result = [];
  Object.keys(groups).forEach(groupNumber => {
    const groupData = groups[groupNumber];
    const minScore = Math.min(...groupData.map(item => item.score));
    const filteredGroupData = groupData.filter(item => item.score > minScore);
    result.push(...filteredGroupData);
  });

  return result;
}


@Controller('score')
export class ScoreController {
  constructor(private readonly scoreService: ScoreService,
    private readonly teamService: TeamService,) {}

  @Post()
  create(@Body() createScoreDto: CreateScoreDto) {
    return this.scoreService.create(createScoreDto);
    
  }

  @Get()
  async findAll(@Query() query) {
    const  data= await this.scoreService.findAll(query);
    const teamS=this.teamService;
    async function addOutData(object){

      const teams=await teamS.findOne(object.team_id)
      object.team=teams[0]

    }
    
    for (let i = 0; i < data.length; i++) {
      const object:any = data[i];
        await addOutData(object)
      
    }
    return data
  }

  @Get('semifinal')
  async findSemifinal(@Query() query) {
    /*
       这里返回能晋级人的数组。。
       300
    */
   const {rule_id,...rest}=query
   let  data=null
   switch(rule_id){
    // 预赛小组第 1 名，其余进入半决赛 预赛小组第 1 名，其余进入半决赛；
    case '300' :
      const  scoreList= await this.findAll({...rest,round_type:0});
      data=filterGroupFirst(scoreList).sort((a,b)=>a.score-b.score).map((item,index:any)=>{
          return {
            ...item,
            no:index+1
          }
      })

      // 然后呢，

      console.log(data)
      
    


   }

   
    return data
  }



  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scoreService.findOne(+id);
  }

  @Patch()
  update( @Body() updateScoreDto: UpdateScoreDto) {
    return this.scoreService.update(updateScoreDto);
  }

  @Delete()
  remove(@Query() del) {
    return this.scoreService.remove(del);
  }
}
