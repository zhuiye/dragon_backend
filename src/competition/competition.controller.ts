import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CreateCompetitionDto } from './dto/create_competition.dto';
import {Response,Request} from 'express'
// import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly comService: CompetitionService) {}

  @Post('add')
  async create(@Body() competitionDto: CreateCompetitionDto) {

     
      return  await this.comService.create(competitionDto);
  }

  @Get()
  async findAll() {
    // console.log("??hello")
    return await this.comService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string,@Res() response:Response) {
    
   response.status(200).send('hello world!!测试一下');
    return await this.comService.findOne(+id);
  }

  @Post('update')
  async update( @Body() updateDto: CreateCompetitionDto) {
   return await this.comService.update(+updateDto.competition_id, updateDto);
  }

  @Post('delete')
  async remove(@Body() body: {competitionId:string}) {
    return await this.comService.remove(+body.competitionId);
  }
}
