import { PartialType } from '@nestjs/mapped-types';
import { CreateTeamDto } from './create-team.dto';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {
    team_id: number;
    
    team_name: string;

    user_id: number;
    
    is_seed: number;

    last_score: number;
}
