import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor} from './common/transform.interceptor'
import {AllExceptionsFilter} from './common/exception.filter'
import { ValidationPipe } from '@nestjs/common';
import {RolesGuard} from './modules/role/role.guard'

import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.setGlobalPrefix("dragon-api")
  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalInterceptors(new TransformInterceptor())

  app.useGlobalPipes(new ValidationPipe()); //验证管道

  app.useGlobalGuards(new RolesGuard());
  await app.listen(3000);
}
bootstrap();



function generateDate(data){

  const {preliminaries,replay,semifinal,small_final,qualifying,finals,track_number}=data

  function generateFormatData(groupCount){
    const  tempGroup=[]

  for(let i=0;i<preliminaries;i++){

    let t={
      group_id:i,
      time:'',
      enters:new Array().fill(track_number)
    }
   
    tempGroup.push(t)
  }
    return tempGroup
  }


  return {
    0:generateFormatData(preliminaries), //预赛
    1:generateFormatData(replay),   // 半决赛
    2:generateFormatData(semifinal), //小决赛
    3:generateFormatData(small_final), //
    4:generateFormatData(qualifying),  //排位赛
    5:generateFormatData(finals),  //决赛

  }

  
  
}