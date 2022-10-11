import { PartialType } from '@nestjs/mapped-types';
import { CreateCompetitionItemDto } from './create-competition-item.dto';

export class UpdateCompetitionItemDto extends PartialType(CreateCompetitionItemDto) {
    competition_item_id:number
}
