import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemSortService } from './item-sort.service';
import { CreateItemSortDto } from './dto/create-item-sort.dto';
import { UpdateItemSortDto } from './dto/update-item-sort.dto';

@Controller('competition-item-sort')
export class CompetitionItemSortController {
  constructor(private readonly competitionItemSortService: ItemSortService) {}

  @Post()
  create(@Body() createCompetitionItemSortDto: CreateItemSortDto) {
    
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
  update(@Param('id') id: string, @Body() updateCompetitionItemSortDto: UpdateItemSortDto) {
    return this.competitionItemSortService.update(+id, updateCompetitionItemSortDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionItemSortService.remove(+id);
  }
}
