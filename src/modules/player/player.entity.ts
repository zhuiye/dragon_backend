import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
export class Player {
    @PrimaryGeneratedColumn()
    play_id: number;

    @Column({length:50})
    name:number;

    gender:number;

    @Column({length:13})
    phone_number:string;

    age:number;

    @Column({length:30})
    identify_number:number;

    post_id:number

    @Column({length:50})
    image_url:string;

    is_register_success:number

   
}
