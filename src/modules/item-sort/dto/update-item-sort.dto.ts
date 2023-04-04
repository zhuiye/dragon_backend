import { PartialType } from '@nestjs/mapped-types';
import { CreateItemSortDto } from './create-item-sort.dto';

export class UpdateItemSortDto extends PartialType(CreateItemSortDto) {
    sort_id:number
    sort_name:string
    sort_gender: string
    sort_number:number
}
