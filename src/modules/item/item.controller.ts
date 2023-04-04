import { Controller, Get, Post, Body, Patch, Param, Delete, Query,Put } from '@nestjs/common';
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
    
    console.log('updateItemDto',updateItemDto)
    return this.competitionItemService.update(updateItemDto);
  }

  @Delete()
  remove(@Body() deleteDto:{item_id:any}) {
    return this.competitionItemService.remove(deleteDto);
  }
}
