
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class CheckList {
    @PrimaryGeneratedColumn()
    check_id: number;

    @Column()
    competition_id:number;
    @Column()
    round_type:number;

    @Column()
    group_number:number;

  
    @Column()
    team_id:any;

    @Column()
    status:number;

    @Column() 
    down:string;  

    @Column()
    item_key:string;

}






