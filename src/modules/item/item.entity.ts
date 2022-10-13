
import { Entity, PrimaryGeneratedColumn, Column,OneToMany, JoinColumn  } from "typeorm";
import {ItemSort} from '../item-sort/item-sort.entity'

@Entity()
export class Item{
    
    @PrimaryGeneratedColumn()
    item_id:number

    @Column({length:200})
    item_name: string;
    
    // 要注意里面的双向
    @OneToMany(type => ItemSort,
         ItemSort => ItemSort.item,
         {cascade: true,}) // note: we will create author property in the Photo class below
    item_sort: ItemSort[];

}

