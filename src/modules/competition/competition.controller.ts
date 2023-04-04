import { Controller, Get, Post, Body, Patch, Param, Delete, Res, Req, Put,Inject } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CreateCompetitionDto } from './dto';
import {Response,Request} from 'express'

@Controller('competition')
export class CompetitionController {
  constructor(private readonly competitionService: CompetitionService,
    @Inject('CONFIG')
    private  gconfig:any) {}

  @Post()
  async create(@Body() competitionDto: CreateCompetitionDto) {
      return  await this.competitionService.create(competitionDto);
  }

  @Patch(':id')
  async update(@Param('id') id:string, @Body() updateDto: CreateCompetitionDto) {
   return await this.competitionService.update(+id,updateDto);
  }

  @Get()
  async findAll() {
    

     const data=await   this.competitionService.findAll();
     
    return data.reverse()
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.competitionService.findOne(+id);
  }
 

  @Delete()
  async remove( @Body() params :any) {
    return await this.competitionService.remove(params.competition_id);
  }
}
