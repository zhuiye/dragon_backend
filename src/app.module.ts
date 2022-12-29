import { Module,NestModule ,MiddlewareConsumer} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionModule } from './modules/competition/competition.module'
import { CompetitionItemModule } from './modules/item/item.module';
import { CompetitionItemSortModule } from './modules/item-sort/item-sort.module';
import {logger} from './common/logger.middleware'
import {GlobalModule} from './global.module'
import {PlayerModule} from './modules/player/player.module'
const ormConfig=require('../ormConfig.json')


@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    CompetitionModule,
    CompetitionItemModule,
    CompetitionItemSortModule,
    GlobalModule,
    PlayerModule
  ],
  providers:[],
  controllers: [],
  exports: [],
  
})
export class AppModule  implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes('*');
  }
}
