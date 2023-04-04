import { Module } from '@nestjs/common';
import { SelectSettingService } from './select-setting.service';
import { SelectSettingController } from './select-setting.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SelectSetting } from './entities/select-setting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SelectSetting])],

  controllers: [SelectSettingController],
  providers: [SelectSettingService]
})
export class SelectSettingModule {}
