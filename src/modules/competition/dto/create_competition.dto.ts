import { IsNotEmpty } from 'class-validator';
export class CreateCompetitionDto {
    
    @IsNotEmpty()
    readonly name: string;
    
    readonly content: string;

    @IsNotEmpty()
    readonly sign_up_start_time: number;

    @IsNotEmpty()
    readonly sign_up_end_time: number;

    readonly start_time: number;

    readonly end_time:number
}
