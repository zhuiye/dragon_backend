import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CompetitionItemService } from './competition-item.service';
import { CreateCompetitionItemDto } from './dto/create-competition-item.dto';
import { UpdateCompetitionItemDto } from './dto/update-competition-item.dto';

@Controller('competition-item')
export class CompetitionItemController {
  constructor(private readonly competitionItemService: CompetitionItemService) {}

  @Post()
  create(@Body() createCompetitionItemDto: CreateCompetitionItemDto) {
    return this.competitionItemService.create(createCompetitionItemDto);
  }

  @Get('/relations')
  getRelationItemSort(@Query() query:any) {
    return this.competitionItemService.getRelation(query.id);
  }

  @Get()
  findAll() {
    return this.competitionItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionItemService.findOne(+id);
  }

  @Patch()
  update( @Body() updateCompetitionItemDto: UpdateCompetitionItemDto) {
    return this.competitionItemService.update(updateCompetitionItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionItemService.remove(+id);
  }
}
