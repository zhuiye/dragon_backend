import { Module } from '@nestjs/common';
import { CheckListService } from './check-list.service';
import { CheckListController } from './check-list.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CheckList } from './entities/check-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CheckList])],
  controllers: [CheckListController],
  providers: [CheckListService]
})
export class CheckListModule {}
