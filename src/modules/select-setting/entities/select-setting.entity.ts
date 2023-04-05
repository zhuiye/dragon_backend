
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
                        sort_id:'',
                        stage:0, //阶段
                        data:{
                           
                            0:[[
                                {
                                   time:'18:00'，
                                   enters:[ {teamId:'',score:'',a:'',b:'',routeId:''},{},{},{}]
                                },
                               ],
                              [
                                 {
                                   time:'18:00'，
                                   enters:[ {teamId:'',score:'',a:'',b:''},{},{},{}]
                                 },
                               ]
                            ]
                            1:[

                            ]
                            2
                        }
                    }
                 ]
                 
              "divide_group_id": 6,
              "race_track_number": 6,
              "team_number_start": 7,
              "team_number_end": 8,
            0  "preliminaries": 2,
            1  "replay": 0,
             2 "semifinal": 1,
            3  "small_final": 1,
             4 "qualifying": 0,
            5  "finals": 1   

              competition_id,round_id,group_id,time ,item_links
                 1             0       1               参赛队伍人数等等,项目名称等等
                 1             0       2

           现在需要有数据 data={
            preliminaries:2,
            replay:0
            semifinal:1,
            small_final:0,
            qualifying:0,
            finals:1,
           },其中,preliminaries 代表 round_id=0,
               replay 代表 round_id=1,
               semifinal 代表 round_id=2,
               small_final 代表  round_id=3,
               qualifying 代表  round_id=4,
               finals 代表  round_id=5,  现在根据 data 键值的值，对象,
               如果 值 为2，代表生成 2 个对象，其中 group_id 分别为 1，2，
               如果值为 0，不需要生成对象，
               下面看一个具体的例子,
               输入data,输出
                 result=[
                    {competition_id:1,round_id:0,group_id:1,time:0,item_links:''}
                    {competition_id:1,round_id:0,group_id:2,time:0,item_links:''}
                    {competition_id:1,round_id:1,group_id:2,time:0,item_links:''}
                    {competition_id:1,round_id:5,group_id:1,time:0,item_links:''}
 
                 ]

    */
    item_relation_setting:string;  

   
}




