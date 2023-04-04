import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemSortService } from './item-sort.service';
import { CreateItemSortDto } from './dto/create-item-sort.dto';
import { UpdateItemSortDto } from './dto/update-item-sort.dto';

@Controller('item-sort')
export class CompetitionItemSortController {
  constructor(private readonly competitionItemSortService: ItemSortService) {}

  @Post()
  create(@Body() createCompetitionItemSortDto: CreateItemSortDto) {
    
    return this.competitionItemSortService.create(createCompetitionItemSortDto);
  }


  @Get()
  findAll() {
    return this.competitionItemSortService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionItemSortService.findOne(+id);
  }

  @Patch()
  update( @Body() updateCompetitionItemSortDto: UpdateItemSortDto) {
    console.log('..')
    return this.competitionItemSortService.update(updateCompetitionItemSortDto);
  }

  @Delete()
  remove(@Body() delDto:any ) {
    return this.competitionItemSortService.remove(delDto);
  }
}
