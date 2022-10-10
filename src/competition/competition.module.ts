import { Module } from '@nestjs/common';
import {  CompetitionService} from './competition.service';
import { CompetitionController } from './competition.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Competition } from './entities/competition.entity';

/*

imports: [DatabaseModule],
  providers: [
    ...photoProviders,
    PhotoService,
  ],
*/
@Module({
  imports: [TypeOrmModule.forFeature([Competition])],
  controllers: [CompetitionController],
  providers: [CompetitionService]
})
export class CompetitionModule {}
