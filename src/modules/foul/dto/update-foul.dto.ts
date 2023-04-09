import { PartialType } from '@nestjs/mapped-types';
import { CreateFoulDto } from './create-foul.dto';

export class UpdateFoulDto extends PartialType(CreateFoulDto) {
    
    competition_id: number;
    team_id: number;
    round_type:number;
    path: number;
    group_number: number;
    foul_type: number;
    desc:string
}
