
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";
@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    role_id: number;
    
    @Column()
    role_name: string;

    @Column()
    routes: string;

}


