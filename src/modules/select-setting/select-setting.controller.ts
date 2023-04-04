import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SelectSettingService } from './select-setting.service';
import { CreateSelectSettingDto } from './dto/create-select-setting.dto';
import { UpdateSelectSettingDto } from './dto/update-select-setting.dto';

@Controller('select-setting')
export class SelectSettingController {
  constructor(private readonly selectSettingService: SelectSettingService) {}

  @Post()
  create(@Body() createSelectSettingDto: CreateSelectSettingDto) {
    return this.selectSettingService.create(createSelectSettingDto);
  }

  @Get()
  findAll() {
    return this.selectSettingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.selectSettingService.findOne(+id);
  }

  @Patch()
  update( @Body() updateSelectSettingDto: UpdateSelectSettingDto) {
    return this.selectSettingService.update( updateSelectSettingDto);
  }

  @Delete()
  remove(@Body() delData) {
    return this.selectSettingService.remove(delData);
  }
}
