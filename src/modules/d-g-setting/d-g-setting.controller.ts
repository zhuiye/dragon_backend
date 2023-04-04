import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DGSettingService } from './d-g-setting.service';
import { CreateDGSettingDto } from './dto/create-d-g-setting.dto';
import { UpdateDGSettingDto } from './dto/update-d-g-setting.dto';

@Controller('d-g-setting')
export class DGSettingController {
  constructor(private readonly dGSettingService: DGSettingService) {}

  @Post()
  create(@Body() createDGSettingDto: CreateDGSettingDto) {
    return this.dGSettingService.create(createDGSettingDto);
  }

  @Get()
  findAll() {
    return this.dGSettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dGSettingService.findOne(+id);
  }

  @Patch()
  update( @Body() updateDGSettingDto: UpdateDGSettingDto) {
    return this.dGSettingService.update(updateDGSettingDto);
  }

  @Delete()
  remove(@Body() delDto:any) {
    return this.dGSettingService.remove(delDto);
  }
}
