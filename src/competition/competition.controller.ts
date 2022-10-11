import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CreateCompetitionDto } from './dto/create_competition.dto';
import {Response,Request} from 'express'
// import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly comService: CompetitionService) {}

  @Post()
  async create(@Body() competitionDto: CreateCompetitionDto) {
      /**这个到没什么的 */
      return  await this.comService.create(competitionDto);
  }

  @Get()
  async findAll() {
   
    return await this.comService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.comService.findOne(+id);
  }

  @Patch()
  async update( @Body() updateDto: CreateCompetitionDto) {
   return await this.comService.update(updateDto.competition_id,updateDto);
  }

  @Delete()
  async remove( @Body() params :any) {
    // console.log(params)
    return await this.comService.remove(params.competition_id);
  }
}
