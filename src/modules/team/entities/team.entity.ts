import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";

/*

`team_id` INT UNSIGNED,
    `team_name` varchar(20),
    `user_id` INT UNSIGNED, 
    `is_seed`  int,
    `last_score` FLOAT NULL,
*/
@Entity()
export class Team {
    @PrimaryGeneratedColumn()
    team_id: number;
    
    @Column()
    team_name: string;

    @Column()
    user_id: number;
    
    @Column()
    is_seed: number;
    @Column()

    last_score: number;
    @Column()
    desc:string

}
