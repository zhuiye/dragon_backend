import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionModule } from './modules/competition/competition.module'
import { CompetitionItemModule } from './modules/item/item.module';
import { CompetitionItemSortModule } from './modules/item-sort/item-sort.module';

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
