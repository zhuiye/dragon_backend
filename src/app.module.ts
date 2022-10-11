import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionModule } from './competition/competition.module'
import { CompetitionItemModule } from './competition-item/competition-item.module';
import { CompetitionItemSortModule } from './competition-item-sort/competition-item-sort.module';

const ormConfig=require('../ormConfig.json')
@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    CompetitionModule,
    CompetitionItemModule,
    CompetitionItemSortModule,
  ],
  controllers: []
})
export class AppModule {}
