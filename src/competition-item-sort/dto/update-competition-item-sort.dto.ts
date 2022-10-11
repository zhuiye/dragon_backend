import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetitionItemSortDto } from './create-competition-item-sort.dto';

export class UpdateCompetitionItemSortDto extends PartialType(CreateCompetitionItemSortDto) {
    competition_item_id:number
    competition_item_inner_id
    competition_item_inner_name:string
    competition_item_inner_gender: number
    competition_item_number:number
}
