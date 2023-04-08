import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  create(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.create(createTeamDto);
  }

  @Get()
  findAll(@Query() query) {
    return this.teamService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamService.findOne(+id);
  }

  @Patch()
  update( @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.update(updateTeamDto);
  }

  @Delete()
  remove(@Body() delDot) {
    return this.teamService.remove(delDot);
  }
}
