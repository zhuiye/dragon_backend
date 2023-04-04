
import { Entity, PrimaryGeneratedColumn, Column,OneToMany, JoinColumn  } from "typeorm";

@Entity()
export class Item{
    
    @PrimaryGeneratedColumn()
    item_id:number

    @Column({length:200})
    item_name: string;
    

}

