import { Module } from '@nestjs/common';
import { CompetitionItemService } from './competition-item.service';
import { CompetitionItemController } from './competition-item.controller';

@Module({
  controllers: [CompetitionItemController],
  providers: [CompetitionItemService]
})
export class CompetitionItemModule {}
