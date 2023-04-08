/*


CREATE TABLE IF NOT EXISTS sign_up (
sign_up_id INT UNSIGNED AUTO_INCREMENT,
competition_id INT UNSIGNED,
team_id INT,
player_ids VARCHAR(5000),
submit_time BIGINT NULL,
item_relation VARCHAR(10000),
status INT UNSIGNED NULL,
PRIMARY KEY (sign_up_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
*/
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class SignUp {
    @PrimaryGeneratedColumn()
    sign_up_id: number;

    @Column()
    competition_id:number;

    @Column()

    team_id:number;

    @Column()
    player_ids:string;

  
    /*
        [{itemId:'',sortItemId:'',player_ids:[]}]
    */
    @Column()
    item_relation:string  

    @Column()  
    submit_time:number
    @Column()
    status:number

    @Column()
    reason:string
   
}



