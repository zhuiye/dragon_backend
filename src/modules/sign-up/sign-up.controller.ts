import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { PlayerService } from '../player/player.service';
import { CompetitionService } from '../competition/competition.service';
import { TeamService } from '../team/team.service';
import { TimelineService } from '../timeline/timeline.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService,
    private readonly playerService: PlayerService,
    private readonly competitionService: CompetitionService,
    private readonly teamService: TeamService,
    private readonly timelineService: TimelineService,
    ) {

  }

  @Post()
  create(@Body() createSignUpDto: CreateSignUpDto) {
    return this.signUpService.create(createSignUpDto);
  }

  @Get()
  async get(@Query() query) {
    const data= await  this.signUpService.findAll(query);

    const playerS=this.playerService

    async function addPlayersToItemRelation(itemRelation) {
      const playerIds = itemRelation.binds;
      const players = await playerS.findByIds(playerIds);
      itemRelation.players = players;
    }
    const teamS=this.teamService
    const cS=this.competitionService
    async function addOutData(object){
      const competitions=await cS.findOne(object.competition_id)

      const teams=await teamS.findOne(object.team_id)


      object.competitions=competitions
      object.teams=teams[0]


  
      for (let j = 0; j < object.item_relation.length; j++) {
        const itemRelation = object.item_relation[j];
        await addPlayersToItemRelation(itemRelation);
      }
    }
    
    for (let i = 0; i < data.length; i++) {
      const object:any = data[i];
        await addOutData(object)
      
    }

    return data



  }


  @Get('team')
  async getTeams(@Query() query){
    const {item_key,...rest}=query;

    const data= await  this.signUpService.findAll(rest);

    const teamS=this.teamService


    const res=[]

    async function addOutData(object){
      
      const item_relation=object.item_relation;

      const item=item_relation.filter((it)=>{
        return it.key===item_key
      })[0]

      if(item.binds&&item.binds.length>0){
        const teams=await teamS.findOne(object.team_id)
        res.push(teams[0])
      }
    }
    
    for (let i = 0; i < data.length; i++) {
      const object:any = data[i];
        await addOutData(object)
      
    }

    return res

  }
  @Get('players')
  async getSignTeamsPlayer(@Query() query){
    const {item_key,...rest}=query
     const  data=await this.get(rest)
     const item_relation=data[0].item_relation;
     const items=item_relation.find((it)=>it.key===item_key)

     let res=[];

     res=items.players
     

     return res


  }



  

  @Get('count')
  async getSignCount(@Query() query:any) {
    const timelineService=this.timelineService
    
    const data=await  this.signUpService.getSignCount(query);

    const is_generate=async (ob)=>{
          const findData=await timelineService.findAll({competition_id:query.competition_id,item_key:ob.key})
          ob.is_generate=findData.length>0?true:false
    }

    for(let item of data){
      await is_generate(item)
    }
    return data
  }

  @Patch()
  update( @Body() updateSignUpDto: UpdateSignUpDto) {
    return this.signUpService.update(updateSignUpDto);
  }

  @Delete()
  remove(@Body() delDto :any) {
    return this.signUpService.remove(delDto);

    
  }
}
