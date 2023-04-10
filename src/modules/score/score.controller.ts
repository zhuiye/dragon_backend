import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { TeamService } from '../team/team.service';
import { filterGroupFirst, getGroupFirstByLen,rankTeams } from './utils';



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

  @Get('group')
  async group(@Query() query){
      const data=await  this.findAll(query)

      const res=rankTeams(data as any)

      return res
      
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

   }
   
    return data
  }
  // 处理决赛
  @Get('final')
  async findFinal(@Query() query)
  {
    const {rule_id,...rest}=query
    let  data=null
    switch(rule_id){
      // 预赛小组第一名，半决赛 1 组，前两名进决赛
      case '600' :
        const  preScores= await this.findAll({...rest,round_type:0});
        const preFirst=getGroupFirstByLen(preScores,1)


        const  semifinalList= await this.findAll({...rest,round_type:2});


        const semifinalFirst= getGroupFirstByLen(semifinalList,2)



        data=[...preFirst,...semifinalFirst].sort((a,b)=>a.score-b.score).map((item,index:any)=>{
          return {
            ...item,
            no:index+1
          }
      })
      

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
