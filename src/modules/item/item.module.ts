import { Module } from '@nestjs/common';
import { ItemService } from './item.service';
import { CompetitionItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Item} from './item.entity'
@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [CompetitionItemController],
  providers: [ItemService]
})
export class CompetitionItemModule {}

