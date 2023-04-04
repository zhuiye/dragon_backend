
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class SelectSetting {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    competition_id:number;


    @Column()   /*  存json,赛制的选择
                 [
                    {
                        item_id:'',
                        sort_id
                        divide_group_id:2,
                    }
                 ]
    */
    item_relation_setting:string;  

   
}




