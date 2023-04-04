import { PartialType } from '@nestjs/mapped-types';
import { CreateDGSettingDto } from './create-d-g-setting.dto';

export class UpdateDGSettingDto extends PartialType(CreateDGSettingDto) {
    divide_group_id: number;

}
