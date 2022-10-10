import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
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

  @Get()
  findAll() {
    return this.competitionItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitionItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompetitionItemDto: UpdateCompetitionItemDto) {
    return this.competitionItemService.update(+id, updateCompetitionItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.competitionItemService.remove(+id);
  }
}
