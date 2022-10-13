import { PartialType } from '@nestjs/mapped-types';
import { CreateItemSortDto } from './create-item-sort.dto';

export class UpdateItemSortDto extends PartialType(CreateItemSortDto) {
    item_id:number
    item_inner_id
    item_inner_name:string
    item_inner_gender: number
    item_number:number
}
