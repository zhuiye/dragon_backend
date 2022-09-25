import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Competition{

    @PrimaryGeneratedColumn()
    competition_id: number;

    @Column()
    competition_name: string;

    @Column()
    competition_content: string;

    @Column()
    competition_sign_up_start_time: number;

    @Column()
    competition_sign_up_end_time: number;

    @Column()
    competition_start_time: number;

    @Column()
    competition_end_time:number
}
