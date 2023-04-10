import { Controller, Get, Post, Body, Patch, Param, Delete,Query } from '@nestjs/common';
import { CheckListService } from './check-list.service';
import { CreateCheckListDto } from './dto/create-check-list.dto';
import { UpdateCheckListDto } from './dto/update-check-list.dto';
import { TeamService } from '../team/team.service';
import { PlayerService } from '../player/player.service';

@Controller('check-list')
export class CheckListController {
  constructor(private readonly checkListService: CheckListService,
    private readonly teamService: TeamService,
    private readonly playService: PlayerService,
    ) {

  }

  @Post()
  create(@Body() createCheckListDto: any) {
    return this.checkListService.create(createCheckListDto.data);
  }

  @Get()
  findAll(@Query() query: any) {
    return this.checkListService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkListService.findOne(+id);
  }

  @Patch()
  update( @Body() updateCheckListDto: UpdateCheckListDto) {
    return this.checkListService.update(updateCheckListDto);
  }

  @Delete()
  remove(@Query() query: any) {
    return this.checkListService.remove(query);
  }
}
