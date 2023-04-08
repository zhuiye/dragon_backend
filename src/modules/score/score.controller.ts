import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ScoreService } from './score.service';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { TeamService } from '../team/team.service';

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
