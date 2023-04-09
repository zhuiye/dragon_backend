import { Module } from '@nestjs/common';
import { CheckListService } from './check-list.service';
import { CheckListController } from './check-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CheckListModule])],
  controllers: [CheckListController],
  providers: [CheckListService]
})
export class CheckListModule {}
