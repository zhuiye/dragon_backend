
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,JoinColumn } from "typeorm";

import {CompetitionItem} from '../competition-item/entities/competition-item.entity';

@Entity()
export class CompetitionItemSort{

    @PrimaryGeneratedColumn()
    competition_item_inner_id: number;

    @Column({length:50})
    competition_item_inner_name: string;

    @Column()
    competition_item_inner_gender: number;

    @Column()
    competition_item_number: number;
    

    @ManyToOne(type => CompetitionItem, 
        competitionItem => competitionItem.competition_item_sort,
        )
    @JoinColumn({name:'competition_item_id'})
    competition_item: CompetitionItem;
}

// swzx8887@ZX