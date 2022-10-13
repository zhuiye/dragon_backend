import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Competition{

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:1000})
    name: string;

    @Column({length:1000})
    content: string;

    @Column("bigint")
    sign_up_start_time: number;

    @Column("bigint")
    sign_up_end_time: number;

    @Column("bigint")
    start_time: number;

    @Column("bigint")
    end_time:number
}
