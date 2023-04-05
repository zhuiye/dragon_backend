

/*
1	4	5	6	2	0	1	1	0	1
2	4	7	8	2	0	2	1	0	1
3	4	9	12	3	2	2	1	1	1
4	4	13	16	4	3	2	1	1	1
5	4	17	20	5	3	3	3	1	1
6	6	7	8	2	0	1	1	0	1
7	6	9	12	2	0	2	1	0	1
8	6	13	18	3	2	2	2	1	1
9	6	19	24	4	3	2	1	1	1
10	6	25	30	5	4	4	2	1	1
11	8	9	10	2	0	1	0	0	1
12	8	11	16	2	0	2	0	1	1
13	8	17	24	3	2	2	1	1	1
14	8	25	32	4	2	2	1	1	1
15	8	33	40	5	4	2	1	1	1

*/
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class DGSetting {
    @PrimaryGeneratedColumn()
    divide_group_id: number;

    @Column()
    race_track_number:number;

    @Column()

    team_number_start:number;

    @Column()
    team_number_end:number;

  
   
    @Column()
    preliminaries:number  

    @Column()  
    replay:number
    @Column()
    semifinal:number

    @Column()

     small_final:number


    @Column()

    qualifying:number
    @Column()
    finals:number


   
}




