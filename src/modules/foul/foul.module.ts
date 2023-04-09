import { Module } from '@nestjs/common';
import { FoulService } from './foul.service';
import { FoulController } from './foul.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Foul } from './entities/foul.entity';
import { CompetitionModule } from '../competition/competition.module';
import { TimelineModule } from '../timeline/timeline.module';
import { TeamModule } from '../team/team.module';

@Module({
  imports: [TypeOrmModule.forFeature([Foul]),CompetitionModule,TeamModule,TimelineModule],
  controllers: [FoulController],
  providers: [FoulService]
})
export class FoulModule {}
