import { Controller, Get, Post, Body, Patch, Param, Delete,
  UseInterceptors,UploadedFile, Query,
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
  
  // 也可以添加数组
  @Post('import')
  addMany(@Body() createPlayerDto: any) {
     console.log('import',createPlayerDto)
    return this.playerService.create(createPlayerDto.data);
  }

  
  @Get()
  findAll(@Query() param:any) {
    return this.playerService.findAll(param);
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
