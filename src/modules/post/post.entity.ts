import { Entity, PrimaryColumn, Column, ManyToOne,JoinColumn } from "typeorm";
@Entity()
export class DragonPost {
    @PrimaryColumn()
    dragon_post_id: number;
    @Column()
    dragon_post_name: string;
}
