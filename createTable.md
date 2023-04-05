# 设计

## 前言

[区别辨析](https://www.tjxz.cc/10506) competition(普通)、contest(音乐，书法，演讲) 与 match(两者)

```sql


  # 赛事表,赛事 id, 赛事名，比赛内容，报名开启时间，结束时间，竞赛开始时间，竞赛结束时间
  /*
     1
     广东省第十届运动会 中国体育彩票 群众体育组龙舟比赛
     为xxx举办xxx龙舟比赛，决定在xxx举办xxxx
     报名开始时间:2022-8-13
     报名结束时间:2022-8-20
     比赛开始时间:2022-9-13 // 这个时间，可能不确定
     杰赛结束时间:2022-9-15 // 后续可能，更改
   */
  CREATE TABLE IF NOT EXISTS `competition`(
   `competition_id` INT UNSIGNED AUTO_INCREMENT,
   `competition_name` VARCHAR(1000) NOT NULL,
   `competition_content` VARCHAR(1000) NULL,
   `competition_sign_up_start_time` int   ,
   `competition_sign_up_end_time` int ,
   `competition_start_time`  int NOT NULL,
   `competition_end_time` int NOT NULL,
    PRIMARY KEY ( `competition_id` )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

  /*
      competition_item_id:1,
      competition_item_name: 100 米直道

      id:2,
      competition_item_name: 200 米直道
  */
   # 比赛项目表,项目id,项目名,（是否限制人数？目前先这样）
  CREATE TABLE IF NOT EXISTS `competition_item`(
    `competition_item_id` INT UNSIGNED AUTO_INCREMENT,
    `competition_item_name` VARCHAR(200) NOT NULL,
    PRIMARY KEY ( `competition_item_id` )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

  /*
      competition_item_id:1
      competition_item_inner_id:1,
      competition_item_inner_name:男子组22人龙舟
      competition_item_inner_gender: 0: 代表男女，1:男，2:女
      competition_item_number: 22 限制参加的人数,

      competition_item_id & competition_item_inner_id  联合主键
  */
   # 比赛项目组别表，比如100米直道，分男子组（22人龙舟）女子组（22人龙舟等）,
  CREATE TABLE IF NOT EXISTS `competition_item_sort`(
    `competition_item_id` int,
    `competition_item_inner_id` int,
    `competition_item_inner_name` VARCHAR(50),
    `competition_item_inner_gender` int ,
    `competition_item_number` int,
     PRIMARY KEY (`competition_item_inner_id` )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

  /*
     competition_id:1,
     competition_item_id:1,
     competition_item_inner_id:1
  */
  #  竞赛联系项目表
 CREATE TABLE IF NOT EXISTS `competition_link_items`(
    `competition_id` INT UNSIGNED,
    `competition_item_id` INT UNSIGNED
    `competition_item_inner_id` INT UNSIGNED
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;



 # 团队表,团队id,团队名,创建

  /*
     team_id:1,
     team_name: 深圳队,
     team_creator:'陈恒承',
     team_creator_id:1,
     is_seed : 是否为种子队,
     last_score :  上轮比赛的分数
  */

  CREATE TABLE IF NOT EXISTS `dragon_team`(
    `team_id` INT UNSIGNED,
    `team_name` varchar(20),
    `team_creator` varchar(20),
    `team_creator_id` INT UNSIGNED
    `is_seed`  int,
    `last_score` FLOAT NULL,
     PRIMARY KEY ( `team_id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;

 /*

   team_id:1,
   player_id:1,
   player_name:'陈恒承',
   gender:1,
   phone_number:18813619456,
   age:25,
   dragon_post_id: 1,
   identify_number:440882199701239155,
   image_url: 图片地址,
   is_register_success: 是否审核通过
 */

  # 团队人员表  性别：待设定，队员id，队员民，性别，电话号码，年龄，职务
  CREATE TABLE IF NOT EXISTS `player`(
    `team_id` INT ,
    `player_id` INT UNSIGNED AUTO_INCREMENT,
    `player_name` varchar(20) not null,
    `gender`  int ,
    `phone_number` varchar(20),
    `age`  int ,
    `post_id` int UNSIGNED,
    `identify_number` varchar(20),
    `image_url`  varchar(20) null ,
    `is_register_success` int,
     PRIMARY KEY ( `player_id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;



#  龙舟职务表
 /* 0:领队，1:教练，2:鼓手，3:舵手，4:划手，5:替补 */
 CREATE TABLE IF NOT EXISTS `dragon_post`(
    `dragon_post_id` INT UNSIGNED,
    `dragon_post_name` varchar(20),
    PRIMARY KEY ( `dragon_post_name` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;




  # 报名表 ,竞赛id，报名团队id,

  /*
      competition_id:1,
      team_id:1,
      team_player_ids:'1-2-3-4'
      submit_time:'2021-3-12',
      competition_item_id:'100米直道',
      competition_item_inner_id:'100米直道 22 男',
      status:'成功|失败|待审核'

  */
  CREATE TABLE IF NOT EXISTS `sign_up`(
        `sign_up_id` INT UNSIGNED AUTO_INCREMENT,
        `competition_id` INT UNSIGNED,
        `team_id` INT,
        `player_ids`:varchar(500),
        `submit_time` BIGINT Null,
        `item_id` INT UNSIGNED Null,
        `sort_item_id` INT UNSIGNED Null,
        `sort_item_relation` varchar(10000),
        `status` INT UNSIGNED Null,
        PRIMARY KEY (`sign_up_id` )

  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

  /*编排分组数设定表*/



  /*
     赛道数:4
     参加比赛团队数起始数:5,
     参加比赛团队数终止数:5,
     preliminaries:2 //预赛 2组
     replay : 0 复赛，
     semifinal：1 半决赛 组
     small_final:1 小决赛 1 组
     qualifying:0 排位赛 0 组
     finals:  决赛 1 组
  */

 CREATE TABLE IF NOT EXISTS `competition_divide_group_setting`(
    `divide_group_id` INT UNSIGNED,
    `race_track_number` INT UNSIGNED,
    `team_number_start` INT UNSIGNED,
    `team_number_end` INT UNSIGNED,
    `preliminaries` INT UNSIGNED,
    `replay` INT UNSIGNED,
    `semifinal` INT UNSIGNED,
    `small_final` INT UNSIGNED,
    `qualifying` INT UNSIGNED,
    `finals` INT UNSIGNED
 )

 # 分组模式绑定比赛类别表
 CREATE TABLE IF NOT EXISTS `competition_items_bind_divide_group`(
    `competition_id` INT UNSIGNED,
    `competition_item_id` INT UNSIGNED,
    `competition_item_inner_id` INT UNSIGNED,
    `divide_group_id`  INT UNSIGNED,
     PRIMARY KEY ( `competition_id`,`competition_item_id`, `competition_item_inner_id`,`divide_group_id`)
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;


/*
   绑定之后，那么就可以手动生成 预赛多少组，半决多少组....

   现有一个龙舟竞赛系统,比赛项目有100米直道，200米直道，
   参加的队伍人数有五队，比赛赛制是 预赛两组，复赛无，半决赛1组，小半决赛1组，排位赛无，决赛1组。

   晋级的规则
      预赛到半决  ：预赛小组第 1 名，其余进入半决赛；
      半决到决赛： 前两名进决赛

   需求设计若干表，表示整个比赛的流程

*/

CREATE TABLE IF NOT EXISTS `competition_group` (
  `competition_id` int ,
  `competition_item_id` INT UNSIGNED,
  `competition_item_name` varchar(50),
  `competition_item_inner_id` INT,
  `competition_item_inner_name` varchar(50),
  `competition_round_type` INT, # 0 预赛，1 复赛，2半决，3排位赛，4小半决，5 决赛
  `competition_round_number` INT, # 第几组
  `competition_team_count` int , # 队数，
  `remark` varchar(20)  # 备注
)ENGINE=InnoDB DEFAULT CHARSET=utf8;



# 竞赛日程安排表
 CREATE TABLE IF NOT EXISTS `timeline`(

         `timeline_id`:INT UNSIGNED AUTO_INCREMENT ,
         `competition_id` int ,
         `date` BIGINT,
         `round_type` INT,
         `group_number` INT,
         `item_links` varchar(2000) ,
          PRIMARY KEY ( `timeline_id` )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;


  # 应该有一个编排表:

  轮次，组别，时间，龙舟道:(1,2,3,4,5,6,7,8),





  # 成绩录入表

    CREATE TABLE IF NOT EXISTS `score`(
      `id`:INT UNSIGNED AUTO_INCREMENT ,
     `competition_id` int ,
     `team_id` INT UNSIGNED,
     `track_no` INT UNSIGNED ,
     `model` INT UNSIGNED ,#  采取什么境界方式
     `round_type` INT, # 0 预赛，1 复赛，2半决，3排位赛，4小半决，5 决赛
     `round_number` INT, // 第几组
     `score` INT,
     `submit_time` BIGINT,
     PRIMARY KEY ( `player_id` )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*
      都

*/



  --  或许还要考虑一个状态表..



# 用户登陆表

  CREATE TABLE IF NOT EXISTS `user`(
     `user_id` int auto_increment,
     `account` int ,
     `password` INT UNSIGNED,
     `role_id` INT,
     PRIMARY KEY ( `user_id` )

  )ENGINE=InnoDB DEFAULT CHARSET=utf8;
# 角色表
CREATE TABLE IF NOT EXISTS `role`(
     `role_id` int auto_increment,
     `roleName` INT UNSIGNED,
     PRIMARY KEY ( `role_id` )

  )ENGINE=InnoDB DEFAULT CHARSET=utf8;



--  // 比赛轮次状态表

--    目前状态: 0:未进行预赛编排，1:已行预赛编排,2:复赛，3:半决赛，4:排位赛,5:小决赛，6:决赛。


```

## 比赛编排表

注意：分组编号是在编排的时候确定的。

- 比赛名，比赛 id，项目 id,比赛团队名，比赛团队 id，比赛轮次，预赛分组编号，复赛分组编号,半决赛分组编号，小决赛分组编号，排名赛分组编号

## 分组编号记录表

- 比赛名，比赛 id，项目 id,比赛团队名，比赛团队 id，比赛轮次，分组编号，龙舟赛道号

## 关于赛制的设置

本次比赛 4 道 龙舟。
8 支队伍，采取 半决赛，决赛。
女子四队：采取轮赛制

根据赛道和参赛人数，决定赛制。

预复，复赛，半决赛，决赛

## 晋级规则业务逻辑

首先是，半决赛的编排，我只需要取预赛中小组不是第一名即可，
决赛，我去小组预赛第一名 ,和半决赛小组前两名进决赛即可 .

## 关于分组算法的实现逻辑

- 预设规则

  晋级规则映射表

  ```js
     复赛晋级规则:
     200: 预赛中小组除 第 1 名加落败队伍中成绩最好的1 支队进入半决赛，其余进入复赛
     201: 取预赛中的小组除一名外的.
     202:预赛中除 小组第 1 名加落败队伍中成绩最好的3 支队
     203: 除-预组前 2 + 落败前2
     204: 预

     半决赛:
     300:预赛小组第 1 名，其余进入半决赛；

     301: 复赛中小组第 1 名加落败队伍中成绩最好的 2 支队进入半决赛，和预赛中小组第 1 名加落败队伍中成绩最好的1 支队

     302: 预赛小组第 1 名+ 复赛 小组第 1 名加落败队伍中成绩最好的1 支队进入半决赛，

     303:预赛中小组第 1 名加落败队伍中成绩最好的3 支队进入半决赛  加 复赛中 小组第 1 名加落败队伍中成绩最好的 1 支队进入半决赛；

     304: 复赛 小组前 2 名加落败队伍中成绩最好的2 支队

     305：预赛 小组第 1 名加落败队伍中成绩最好的2 支队 + 复赛 落败队伍中成绩最好的3 支队进入半决赛

     306 :预赛小组第一+加落败队伍中成绩最好的1 支队+ 小组第 1 名加落败队伍中成绩最好的2 支队

     513: 预组前 2 + 落败前2+ 复组 前3+ 落败前2


     排位赛:
     400:  复赛中 除去 小组第 1 名加落败队伍中成绩最好的2 支队进入半决赛，其余进入排名赛(9 队参赛，最后 1 名为第 9 名)；
     401:  复赛中 第 5-8 名

     402:半决赛 9-12
     403: 除复赛 小组前 2 名加落败队伍中成绩最好的2 支队
     404 : 复赛 7-12 名
     404: 除 复组前3 + 落败前2
     405: 复 9-16



     小决赛:

     500:半决赛 1 组,除 前两，其余进入小决赛(5 队参赛，最后1 名为第 5 名)；
     501:半决赛 2 组,除 小组第一名，其余进入小决赛(5 队参赛，最后1 名为第 5 名)；
     502:半决赛 除 第 1 名加落败队伍中成绩最好的2 支队进入决赛;
     508:半决赛 5-8
     509:半决赛 5-10
     510:除半决赛 小组第一+落败成绩最好两支
     511:除半决小组前2名+加落败队伍中成绩最好的2 支队
     512: 半决小组第7名之后
     513: 除半组前3+落败前2
     514: 预组前2+复组前2+落败前2
     515: 预1+落败前3





     决赛:
     600:预赛小组第一名，半决赛 1 组，前两名进决赛.
     601:预赛小组第一名，半决赛 小组第一名 .
     602:半决赛 第 1 名加落败队伍中成绩最好的2 支队进入决赛
     603:半决赛 小组第 1 名加落败队伍中成绩最好的1 支队进入决赛

     604: 预赛小组第一+半决赛 1小组前4,
     605:预赛小组第一+半决赛 小组第一+落败成绩最好两支。
     606: 半决小组前2名+加落败队伍中成绩最好的2 支队
     607: 预1+ 半前6
     608: 预1+ 半决小组前2+落败成绩最好前2

     609: 半组前3+落败前2


  ```

  ```js
     [
      {id:1pathNumber:4,number:'5-6',preCnt:2,reComeCnt:0,halfCnt:1,rankCnt:0,smallEnd:1,endCnt:1}，
      {id:2,pathNumber:4,number:'7-8',preCnt:2,reComeCnt:0,halfCnt:2,
      rankCnt:0,smallEnd:1,endCnt:0},

      {id:3,pathNumber:4,number:'9-12',preCnt:3,reComeCnt:2,halfCnt:2,rankCnt:1,smallEnd:1,endCnt:1,}，
      {id:4,pathNumber:4,number:'13-16',preCnt:4,reComeCnt:3,halfCnt:2,rankCnt:1,smallEnd:1,endCnt:1,}，
      {id:5,pathNumber:4,number:'17-20',preCnt:5,reComeCnt:3,halfCnt:3,rankCnt:1,smallEnd:1,endCnt:1,}，
      // 6 道
      {id:6,pathNumber:6,number:'7-8',preCnt:2,reComeCnt:0,halfCnt:1,rankCnt:0,smallEnd:1,endCnt:1,}，
      {id:7,pathNumber:6,number:'9-12',preCnt:2,reComeCnt:0,halfCnt:2,rankCnt:0,smallEnd:1,endCnt:1,}，
      {id:8,pathNumber:6,number:'13-18',preCnt:3,reComeCnt:2,halfCnt:2,rankCnt:1,smallEnd:1,endCnt:1,}，
      {id:9,pathNumber:6,number:'19-24',preCnt:4,reComeCnt:3,halfCnt:2,rankCnt:1,smallEnd:1,endCnt:1,}，
      {id:10,pathNumber:6,number:'25-30',preCnt:5,reComeCnt:4,halfCnt:2,rankCnt:1,smallEnd:1,endCnt:1,},

      // 8 道

      {id:11,pathNumber:8,number:'9-10',preCnt:2,reComeCnt:0,halfCnt:1,rankCnt:0,smallEnd:1,endCnt:1,}，
      {id:12,pathNumber:8,number:'11-16',preCnt:2,reComeCnt:0,halfCnt:2,rankCnt:0,smallEnd:1,endCnt:1,}，
      {id:13,pathNumber:8,number:'17-24',preCnt:3,reComeCnt:2,halfCnt:2,rankCnt:1,smallEnd:1,endCnt:1,}，
      {id:14,pathNumber:8,number:'25-32',preCnt:4,reComeCnt:3,halfCnt:2,rankCnt:1,smallEnd:1,endCnt:1,}，
      {id:15,pathNumber:8,number:'33-40',preCnt:5,reComeCnt:4,halfCnt:2,rankCnt:1,smallEnd:1,endCnt:1,},


     ]

  ```

  ## 关于编排时间的表的设定

  编排项目: 100 米直道， 200 米直道,

  <!-- time  -->

  ## 编排模块流程

  1. 先设定，每个比赛项目编排的分组,

  2. 选定日期，分项目进行编排 , 第一天 200 米直道， 第二天 500 米直道

  3. 选定时间+ 项目 ，进行编排，会默认产生 一个表格，会自动的分组好该大项目下所有比赛分组。比赛时间间隔的设定。

     项目,赛序,时间，组别,竞赛内容,队数，备注.

## 理清思路
