
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Timeline {
    @PrimaryGeneratedColumn()
    timeline_id: number;

    @Column()
    competition_id:number;
    @Column()
    round_type:number;

    @Column()
    group_number:number;


    @Column()
    date:number;

    @Column() 
    item_sort_link:string;  

    @Column()
    race_track_number:number;


    @Column()
    assign_list:string

    @Column()
    item_key:string;

   
}





