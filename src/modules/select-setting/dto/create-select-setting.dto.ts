export class CreateSelectSettingDto {

    competition_id:number;


     /*  存json,赛制的选择
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
