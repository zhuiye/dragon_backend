import { Controller, Get, Post, Body, Patch, Param, Delete,
  UseInterceptors,UploadedFile,
  // ParseFilePipeBuilder
 } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

// ？
@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playerService.create(createPlayerDto);
  }
  
  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Patch()
  update( @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update( updatePlayerDto);
  }

  @Delete()
  remove(@Body() delDto:any) {
    return this.playerService.remove(delDto);
  }
}
