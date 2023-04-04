
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;
    
    @Column()
    account: string;

    @Column()
    password: string;
    @Column()
    role_id: number;


}

