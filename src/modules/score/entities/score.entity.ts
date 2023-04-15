import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";

@Entity()
export class Score {
    @PrimaryGeneratedColumn()
    score_id: number;
    
    @Column()
    competition_id: number;

    @Column()
    team_id: number;
    
    @Column()
    round_type:number;
    
    @Column()
    track_no: number;

    @Column()
    group_number: number;

    @Column()
    score:number;

    @Column()
    submit_time:number

    @Column()
    content_name:string

    @Column()
    qualifications:string

    @Column()
    item_key:string

    @Column()
    user_id:string

    @Column() // 0,未确认，1已确认
    is_confirm:number


}

