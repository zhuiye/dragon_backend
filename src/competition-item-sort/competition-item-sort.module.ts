import { Module } from '@nestjs/common';
import { CompetitionItemSortService } from './competition-item-sort.service';
import { CompetitionItemSortController } from './competition-item-sort.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompetitionItemSort } from './competition-item-sort.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CompetitionItemSort])],
  controllers: [CompetitionItemSortController],
  providers: [CompetitionItemSortService]
})
export class CompetitionItemSortModule {}
