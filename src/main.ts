import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor} from './transform-interceptor'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("dragon-api")
  app.useGlobalInterceptors(new TransformInterceptor())
  await app.listen(3000);
}
bootstrap();
