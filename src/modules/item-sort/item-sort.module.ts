import { Module } from '@nestjs/common';
import { ItemSortService } from './item-sort.service';
import { CompetitionItemSortController } from './item-sort.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemSort } from './item-sort.entity';
import {Item} from '../item/item.entity'
@Module({
  imports: [TypeOrmModule.forFeature([ItemSort,Item])],
  controllers: [CompetitionItemSortController],
  providers: [ItemSortService]
})
export class CompetitionItemSortModule {}
