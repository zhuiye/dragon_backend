
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";

import {Item} from '../item/item.entity';

@Entity()
export class ItemSort{

    @PrimaryGeneratedColumn()
    sort_id: number;

    @Column()
    sort_name: string;

    @Column()
    sort_gender: string;

    @Column()
    sort_number: number;
    

    // @ManyToOne(type => Item, 
    //     Item => Item.item_sort,
    //     )
    // @JoinColumn({name:'item_id'})
    // item: Item;
}

// swzx8887@ZX