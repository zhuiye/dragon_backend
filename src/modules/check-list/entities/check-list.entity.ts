
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
    team_id:number;

    @Column()
    status:number;

    @Column() 
    down:string;  

    @Column()
    item_key:string;

    @Column()
    path:number

    @Column()
    team_name:string

    @Column()
    players:string

}






