import { Module,NestModule ,MiddlewareConsumer} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionModule } from './modules/competition/competition.module'
import { CompetitionItemModule } from './modules/item/item.module';
import { CompetitionItemSortModule } from './modules/item-sort/item-sort.module';
import {logger} from './common/logger.middleware'
import {GlobalModule} from './global.module'
import {PlayerModule} from './modules/player/player.module'
import { PostModule } from './modules/post/post.module';
import { UserModule } from './modules/user/user.module';
import { TeamModule } from './modules/team/team.module';
import { UploadModule } from './modules/upload/upload.module';
import { SignUpModule } from './modules/sign-up/sign-up.module';
import { DGSettingModule } from './modules/d-g-setting/d-g-setting.module';
import { SelectSettingModule } from './modules/select-setting/select-setting.module';
import { TimelineModule } from './modules/timeline/timeline.module';
const ormConfig=require('../ormConfig.json')


@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    CompetitionModule,
    CompetitionItemModule,
    CompetitionItemSortModule,
    GlobalModule,
    PlayerModule,
    PostModule,
    UserModule,
    TeamModule,
    UploadModule,
    SignUpModule,
    DGSettingModule,
    SelectSettingModule,
    TimelineModule
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
