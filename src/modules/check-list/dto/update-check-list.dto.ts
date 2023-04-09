import { PartialType } from '@nestjs/mapped-types';
import { CreateCheckListDto } from './create-check-list.dto';

export class UpdateCheckListDto extends PartialType(CreateCheckListDto) {
    check_id:any
}
