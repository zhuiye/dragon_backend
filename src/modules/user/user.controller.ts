import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req, Res, Next } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RoleInterfaceService } from '../role/role.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService,
    private readonly roleService: RoleInterfaceService) {

    }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  

  @Post('login')
  async login(@Req() req,@Res() res,@Next() next) {


    const account =req.body.account;
    const password =req.body.password;
    const user= await this.userService.findAll({account,password});

    if(user.length===1){
      req.session.regenerate(function (err) {
        if (err) next(err)
    
        // store user information in session, typically a user id
        req.session.user = user[0].user_id
    
        // save the session before redirection to ensure page
        // load does not happen before session is saved
        req.session.save(function (err) {
          if (err) return next(err)
          res.status(200).send({status:'ok'})
        })
      })
    }else {
      res.status(200).send({status:'error',type:'account'})
    }

  }

  @Post('loginOut')
  loginOut(@Req() req,@Next() next ,@Res() res){
    req.session.user = null
    req.session.save(function (err) {
      if (err) next(err)

    // regenerate the session, which is good practice to help
    // guard against forms of session fixation
      req.session.regenerate(function (err) {
        if (err) next(err)
        res.send('/user/login')
      })
    })
  }


  @Get()
  async findAll(@Req() req) {
    console.log('req.session.user',req.session.user)
    const user= await this.userService.findAll({
      user_id:req.session.user
    });

              
    const role= await this.roleService.findOne(user[0].role_id)

    return {
      ...user[0],
      ...role[0]
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.userService.update( updateUserDto);
  }

  @Delete()
  remove(@Body() delDto: any) {
    return this.userService.remove(delDto);
  }
}
