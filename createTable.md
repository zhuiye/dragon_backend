```sql
  # 赛事表,赛事 id, 赛事名，比赛内容，报名开启时间，结束时间，竞赛开始时间，竞赛结束时间

  CREATE TABLE IF NOT EXISTS `competition`(
   `competition_id` INT UNSIGNED AUTO_INCREMENT,
   `competition_name` VARCHAR(200) NOT NULL,
   `competition_content` varchar(200) NULL,
   `competition_sign_up_start_time` int   ,
   `competition_sign_up_end_time` int ,
   `competition_start_time` int,
   `competition_end_time` int,

    PRIMARY KEY ( `competition_id` )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;


   # 比赛项目表,项目id,项目名,（是否限制人数？目前先这样）
  CREATE TABLE IF NOT EXISTS `competition_item`(
    `competition_item_id` INT UNSIGNED AUTO_INCREMENT,
    `competition_item_name` VARCHAR(200) NOT NULL,
    PRIMARY KEY ( `competition_item_id` )
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

   # 比赛项目组别表，比如100米直到，分男子组（22人龙舟）女子组（22人龙舟等）,
  CREATE TABLE IF NOT EXISTS `competition_item_sort`(
    `competition_item_id` int,
    `competition_item_inner_id` int,
    `competition_item_inner_name` VARCHAR(20),
    `competition_item_number` int
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

  #  竞赛联系项目表

 CREATE TABLE IF NOT EXISTS `competition_link_items`(
    `competition_id` INT UNSIGNED,
    `competition_items_id` INT UNSIGNED
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;


 # 团队表,团队id,团队名,创建

  CREATE TABLE IF NOT EXISTS `dragon_team`(
    `team_id` INT UNSIGNED,
    `team_name` varchar(20),
    `team_creator` varchar(20),
    `is_seed`  int,
    `last_score` int NULL,
     PRIMARY KEY ( `team_id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;

  # 团队人员表  性别：待设定，队员id，队员民，性别，电话号码，年龄，职务
  CREATE TABLE IF NOT EXISTS `dragon_team_player`(
    `team_id` INT ,
    `player_id` INT UNSIGNED AUTO_INCREMENT,
    `player_name` varchar(20) not null,
    `gender`  int ,
    `phone_number` varchar(20),
    `age`  int ,
    `dragon_post_id` int UNSIGNED,
    `identify_number` varchar(20),
    `image_url`  varchar(20) null ,
    `is_register_success` int,
     PRIMARY KEY ( `player_id` )
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;



#  龙舟职务表
 /* 领队，教练，鼓手，舵手，划手，替补 */
 CREATE TABLE IF NOT EXISTS `dragon_post`(
    `dragon_post_id` INT UNSIGNED,
    `dragon_post_name` varchar(20)
 )ENGINE=InnoDB DEFAULT CHARSET=utf8;




  # 报名表 ,竞赛id，报名团队id,

  CREATE TABLE IF NOT EXISTS `competition_sign_up`(
        `competition_id` INT UNSIGNED,
        `sign_up_team_id` INT,
        `competition_sign_up_start_time` VARCHAR(400)  NOT NULL,
        `competition_sign_up_end_time` int,
        `competition_start_time` int,
        `competition_end_time` int
  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

# 竞赛日程安排表
 CREATE TABLE IF NOT EXISTS `competition_timeline`(
        `competition_id` int ,
        `competition_item_id` INT UNSIGNED,
        `competition_item_name` INT,
        `competition_item_inner_id` INT,
        `competition_item_inner_name` varchar(20),

        `contest_start_time` int, # 比赛开始时间
        `competition_round` varchar(20), #竞赛次序，第几轮，等等。
        `competition_team_number` int , # 队数，
        `contest_remark` varchar(20)  # 备注

  )ENGINE=InnoDB DEFAULT CHARSET=utf8;

  #成绩表
  `competetior_item`,
  `scores `
  `teamId`,
  `分数提交时间 `
  `bandId` // 那次大赛的编号
  `score`: 分数,
  `saixu`: // 赛序，预赛，半决，小决赛，排名赛,
  `groupId`: // 分组号

 // 比赛状态表

   目前状态: 0:未进行预赛编排，1:已行预赛编排,2:复赛，3:小决赛，4:半决赛


```

## 关于赛制的设置

本次比赛 4 道 龙舟。
8 支队伍，采取 预赛，半决赛，决赛。
女子四队：采取轮赛制

根据赛道和参赛人数，决定赛制。

预复，复赛，半决赛，决赛
