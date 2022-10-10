import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionModule } from './competition/competition.module'
// import { DatabaseModule } from './database/database.module';
import { CatsController } from './cats/cats.controller';
import { CompetitionItemModule } from './competition-item/competition-item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'dragon_sys',
      autoLoadEntities: true,
      synchronize: true,
    }),
    CompetitionModule,
    CompetitionItemModule,
  ],
  controllers: [CatsController]
})
export class AppModule {}
