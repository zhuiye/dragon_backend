import { IsNotEmpty } from 'class-validator';
import {ItemLink} from  './index'
export class CreateCompetitionDto {
    
    @IsNotEmpty()
    readonly name: string;
    
    readonly content: string;

    @IsNotEmpty()
    readonly sign_up_start_time: number;

    @IsNotEmpty()
    readonly sign_up_end_time: number;

    readonly start_time: number;

    readonly end_time:number;

    readonly item_link:ItemLink[];

}
