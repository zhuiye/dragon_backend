import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FoulService } from './foul.service';
import { CreateFoulDto } from './dto/create-foul.dto';
import { UpdateFoulDto } from './dto/update-foul.dto';
import { CompetitionService } from '../competition/competition.service';
import { TimelineService } from '../timeline/timeline.service';
import { TeamService } from '../team/team.service';


@Controller('foul')
export class FoulController {
  constructor(private readonly foulService: FoulService,
    private readonly competitionService: CompetitionService,
    private readonly timeLineService: TimelineService,
    private readonly teamService: TeamService,

    ) {}

  @Post()
  create(@Body() createFoulDto: CreateFoulDto) {
    return this.foulService.create(createFoulDto);
  }

  @Get()
  async findAll() {
    /*
      
    */
    const  data=await this.foulService.findAll();

    const teamS=this.teamService

    async function  addTeam(ob){
        const teams=await teamS.findOne(ob.team_id)
        ob.team=teams[0]

    }

    for(let item of data){
      await addTeam(item)
    }
    return data
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foulService.findOne(+id);
  }

  @Patch()
  update( @Body() updateFoulDto: UpdateFoulDto) {
    return this.foulService.update(updateFoulDto);
  }

  @Delete()
  remove(@Query() query) {
    return this.foulService.remove(query);
  }
}
