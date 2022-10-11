
import { Entity, PrimaryGeneratedColumn, Column,OneToMany, JoinColumn  } from "typeorm";
import {CompetitionItemSort,} from '../../competition-item-sort/competition-item-sort.entity'

@Entity()
export class CompetitionItem{
    
    @PrimaryGeneratedColumn()
    competition_item_id:number

    @Column({length:200})
    competition_item_name: string;
    
    // 要注意里面的双向
    @OneToMany(type => CompetitionItemSort,
         competitionItemSort => competitionItemSort.competition_item,
         {cascade: true,}) // note: we will create author property in the Photo class below
    competition_item_sort: CompetitionItemSort[];

}

