import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CompetitionItemSortService } from './competition-item-sort.service';
import { CreateCompetitionItemSortDto } from './dto/create-competition-item-sort.dto';
import { UpdateCompetitionItemSortDto } from './dto/update-competition-item-sort.dto';

@Controller('competition-item-sort')
export class CompetitionItemSortController {
  constructor(private readonly competitionItemSortService: CompetitionItemSortService) {}

  @Post()
  create(@Body() createCompetitionItemSortDto: CreateCompetitionItemSortDto) {
    
    return this.competitionItemSortService.create(createCompetitionItemSortDto);
  }

  @Get('/relations')
  getRelation(@Query() query:any) {
    return this.competitionItemSortService.getRelation(query.id);
  }

  @Get()
  findAll() {
    return this.competitionItemSortService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionItemSortService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompetitionItemSortDto: UpdateCompetitionItemSortDto) {
    return this.competitionItemSortService.update(+id, updateCompetitionItemSortDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionItemSortService.remove(+id);
  }
}
