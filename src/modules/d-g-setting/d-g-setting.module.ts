import { Module } from '@nestjs/common';
import { DGSettingService } from './d-g-setting.service';
import { DGSettingController } from './d-g-setting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DGSetting } from './entities/d-g-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DGSetting])],
  controllers: [DGSettingController],
  providers: [DGSettingService]
})
export class DGSettingModule {}
