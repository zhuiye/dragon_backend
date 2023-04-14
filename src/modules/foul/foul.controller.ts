import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { FoulService } from './foul.service';
import { CreateFoulDto } from './dto/create-foul.dto';
import { UpdateFoulDto } from './dto/update-foul.dto';
import { TeamService } from '../team/team.service';
import { RoleInterfaceService } from '../role/role.service';
import { UserService } from '../user/user.service';


@Controller('foul')
export class FoulController {
  constructor(private readonly foulService: FoulService,
    private readonly teamService: TeamService,
    private readonly roleService: RoleInterfaceService,
    private readonly userService: UserService,


    ) {}

  @Post()
  create(@Body() createFoulDto: CreateFoulDto) {
    return this.foulService.create(createFoulDto);
  }

  @Get()
  async findAll() {
    /*
      
    */
    const  data=await this.foulService.findAll();

    const teamS=this.teamService
    const roleS=this.roleService
    const userS=this.userService

    async function  addTeam(ob){
        const teams=await teamS.findOne(ob.team_id)
        ob.team=teams[0]
        const user= await userS.findAll({
          user_id:ob.user_id
        });
    
                  
        const role= await roleS.findOne(user[0].role_id)
        ob.user={
          ...user[0],
           ...role[0]
        }
    }

    for(let item of data){
      await addTeam(item)
    }
    return data
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foulService.findOne(+id);
  }

  @Patch()
  update( @Body() updateFoulDto: UpdateFoulDto) {
    return this.foulService.update(updateFoulDto);
  }

  @Delete()
  remove(@Query() query) {
    return this.foulService.remove(query);
  }
}
