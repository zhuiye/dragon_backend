import { Module } from '@nestjs/common';
import { CheckListService } from './check-list.service';
import { CheckListController } from './check-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckList } from './entities/check-list.entity';
import { TeamModule } from '../team/team.module';
import { PlayerModule } from '../player/player.module';
import { ScoreModule } from '../score/score.module';

@Module({
  imports: [TypeOrmModule.forFeature([CheckList]),TeamModule,PlayerModule,ScoreModule],
  controllers: [CheckListController],
  providers: [CheckListService]
})
export class CheckListModule {}
