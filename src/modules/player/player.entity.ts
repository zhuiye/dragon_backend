import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Player {
    @PrimaryGeneratedColumn()
    player_id: number;

    @Column()
    player_name:string;

    @Column()

    gender:number;

    @Column()
    phone_number:string;

    @Column()
    age:number;

    @Column()
    identify_number:string;

    @Column()
    post_id:number

    @Column()
    image_url:string;

    @Column()  //  导入者id
    user_id:number


    @Column()
    team_id:number
    
    @Column()
    nationality:string

    @Column()
    post_name:string
   
}
