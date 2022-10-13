
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";

import {Item} from '../item/item.entity';

@Entity()
export class ItemSort{

    @PrimaryGeneratedColumn()
    item_inner_id: number;

    @Column({length:50})
    item_inner_name: string;

    @Column()
    item_inner_gender: number;

    @Column()
    item_number: number;
    

    @ManyToOne(type => Item, 
        Item => Item.item_sort,
        )
    @JoinColumn({name:'item_id'})
    item: Item;
}

// swzx8887@ZX