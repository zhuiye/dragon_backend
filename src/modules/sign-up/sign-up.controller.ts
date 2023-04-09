import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';
import { PlayerService } from '../player/player.service';
import { CompetitionService } from '../competition/competition.service';
import { TeamService } from '../team/team.service';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService,
    private readonly playerService: PlayerService,
    private readonly competitionService: CompetitionService,
    private readonly teamService: TeamService,
    
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

  

  @Get('count')
  getSignCount(@Query() query:any) {
    return this.signUpService.getSignCount(query);
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
