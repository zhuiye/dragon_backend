import { IsNotEmpty,IsString ,IsInt} from 'class-validator';

export class CreateCompetitionDto {
    
    @IsNotEmpty()
    readonly name: string;
    
    readonly content: string;

    @IsNotEmpty()
    readonly sign_up_start_time: number;

    @IsNotEmpty()
    readonly sign_up_end_time: number;

    readonly start_time: number;
    
    @IsInt()
    readonly end_time:number;

    item_sort_link:string
}
