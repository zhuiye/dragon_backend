import { Module } from '@nestjs/common';
import { CompetitionItemService } from './competition-item.service';
import { CompetitionItemController } from './competition-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CompetitionItem} from './entities/competition-item.entity'
@Module({
  imports: [TypeOrmModule.forFeature([CompetitionItem])],
  controllers: [CompetitionItemController],
  providers: [CompetitionItemService]
})
export class CompetitionItemModule {}
