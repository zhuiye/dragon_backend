import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompetitionService } from './competition.service';
import { CreateCompetitionDto } from './dto/create_competition.dto';
// import { UpdateNoteDto } from './dto/update-note.dto';

@Controller('competition')
export class CompetitionController {
  constructor(private readonly notesService: CompetitionService) {}

  @Post('add')
  async create(@Body() createNoteDto: CreateCompetitionDto) {
    // console.log()
    /*

    */
    return await this.notesService.create(createNoteDto);
  }

  @Get()
  async findAll() {
    // console.log("??hello")
    return await this.notesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.notesService.findOne(+id);
  }

//   @Patch(':id')
//   async update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
//     // return await this.notesService.update(+id, updateNoteDto);
//   }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.notesService.remove(+id);
  }
}
