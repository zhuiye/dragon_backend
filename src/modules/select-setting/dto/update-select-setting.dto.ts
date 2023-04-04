import { PartialType } from '@nestjs/mapped-types';
import { CreateSelectSettingDto } from './create-select-setting.dto';

export class UpdateSelectSettingDto extends PartialType(CreateSelectSettingDto) {
    id:number
}
