import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionModule } from './competition/competition.module'
// import { DatabaseModule } from './database/database.module';
import { CompetitionItemModule } from './competition-item/competition-item.module';
import { CompetitionItemSortModule } from './competition-item-sort/competition-item-sort.module';

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
    CompetitionItemSortModule,
  ],
  controllers: []
})
export class AppModule {}
