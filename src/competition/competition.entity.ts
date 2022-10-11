import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Competition{

    @PrimaryGeneratedColumn()
    competition_id: number;

    @Column({length:1000})
    competition_name: string;

    @Column({length:1000})
    competition_content: string;

    @Column("bigint")
    competition_sign_up_start_time: number;

    @Column("bigint")
    competition_sign_up_end_time: number;

    @Column("bigint")
    competition_start_time: number;

    @Column("bigint")
    competition_end_time:number
}
