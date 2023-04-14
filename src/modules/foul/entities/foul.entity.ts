import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";

@Entity()
export class Foul {
    @PrimaryGeneratedColumn()
    foul_id: number;
    
    @Column()
    competition_id: number;

    @Column()
    team_id: number;
    
    @Column()
    round_type:number;
    
    @Column()
    path: number;

    @Column()
    group_number: number;
    @Column()
    foul_type: number;


    @Column()
    desc:string

    @Column()
    item_key:string

    @Column()
    content_name:string
    @Column()
    creator:string

    @Column()
    qualifications:string

    @Column()
    user_id:number



}


