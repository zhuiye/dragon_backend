import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor} from './common/transform.interceptor'
import {AllExceptionsFilter} from './common/exception.filter'
import { ValidationPipe } from '@nestjs/common';
import {RolesGuard} from './guard/role.guard'
import * as session from 'express-session';
import * as express from 'express';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    // snapshot: true,
  });

  app.use(session({
    secret: 'my-secret',
    resave: false,
    saveUninitialized: true
  }))

  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.setGlobalPrefix("dragon-api")
  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalInterceptors(new TransformInterceptor())


  app.useGlobalPipes(new ValidationPipe()); //验证管道

  app.useGlobalGuards(new RolesGuard());
  await app.listen(3000);
}
bootstrap();

