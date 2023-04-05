import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { CreateSignUpDto } from './dto/create-sign-up.dto';
import { UpdateSignUpDto } from './dto/update-sign-up.dto';

@Controller('sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post()
  create(@Body() createSignUpDto: CreateSignUpDto) {
    return this.signUpService.create(createSignUpDto);
  }

  @Get()
  findAll() {
    return this.signUpService.findAll();
  }

  

  @Get('count')
  getSignCount(@Query() query:any) {
    return this.signUpService.getSignCount(query);
  }

  @Patch()
  update( @Body() updateSignUpDto: UpdateSignUpDto) {
    return this.signUpService.update(updateSignUpDto);
  }

  @Delete()
  remove(@Body() delDto :any) {
    return this.signUpService.remove(delDto);
  }
}
