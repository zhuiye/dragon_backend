import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor} from './common/transform.interceptor'
import {AllExceptionsFilter} from './common/exception.filter'
import { ValidationPipe } from '@nestjs/common';
import {RolesGuard} from './modules/role/role.guard'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("dragon-api")
  app.useGlobalFilters(new AllExceptionsFilter())
  app.useGlobalInterceptors(new TransformInterceptor())

  app.useGlobalPipes(new ValidationPipe()); //验证管道

  app.useGlobalGuards(new RolesGuard());
  await app.listen(3000);
}
bootstrap();
