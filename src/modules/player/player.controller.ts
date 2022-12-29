import { Controller, Get, Post, Body, Patch, Param, Delete,
  UseInterceptors,UploadedFile,
  // ParseFilePipeBuilder
 } from '@nestjs/common';
 import {FileInterceptor,} from '@nestjs/platform-express'
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
  @UseInterceptors(FileInterceptor('file'))
  @Post('/upload')
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    console.log('file')
    // return this.playerService.create(createPlayerDto);
  }

  @Post('file')
uploadFileAndPassValidation(
  @Body() body: any,
  @UploadedFile(

    // new ParseFilePipe({
    //   validators: [
    //     // ... Set of file validator instances here
    //   ]
    // })
  )
  file: Express.Multer.File,
) {
  return {
    body,
    file: file.buffer.toString(),
  };
}

  @Get()
  findAll() {
    return this.playerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playerService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playerService.remove(+id);
  }
}
