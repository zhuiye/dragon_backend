import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { RoleInterfaceService } from './role.service';
import { CreateRoleInterfaceDto } from './dto/create-role.dto';
import { UpdateRoleInterfaceDto } from './dto/update-role.dto';

@Controller('role')
export class RoleInterfaceController {
  constructor(private readonly roleInterfaceService: RoleInterfaceService) {}

  @Post()
  create(@Body() createRoleDto: CreateRoleInterfaceDto) {
    return this.roleInterfaceService.create(createRoleDto);
  }

  @Get()
  findAll(@Query() query:any) {
    return this.roleInterfaceService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roleInterfaceService.findOne(+id);
  }

  @Patch()
  update( @Body() updateRoleDto: UpdateRoleInterfaceDto) {
    return this.roleInterfaceService.update(updateRoleDto);
  }

  @Delete()
  remove(@Query() query) {
    return this.roleInterfaceService.remove(query);
  }
}
