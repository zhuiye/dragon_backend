import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ItemService } from './item.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('competition-item')
export class CompetitionItemController {
  constructor(private readonly competitionItemService:ItemService) {}

  @Post()
  create(@Body() createCompetitionItemDto: CreateItemDto) {
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
  update( @Body() updateItemDto: UpdateItemDto) {
    return this.competitionItemService.update(updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionItemService.remove(+id);
  }
}
