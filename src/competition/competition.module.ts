import { Module } from '@nestjs/common';
import {  CompetitionService} from './competition.service';
import { CompetitionController } from './competition.controller';
import { DatabaseModule } from 'src/database/database.module';
import { competitionProviders } from './competition.provider';

/*

imports: [DatabaseModule],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
*/
@Module({
  imports: [DatabaseModule],
  controllers: [CompetitionController],
  providers: [...competitionProviders, CompetitionService]
})
export class CompetitionModule {}
