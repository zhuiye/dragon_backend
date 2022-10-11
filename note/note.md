# note

## MYSQL MAC (安装)

https://www.youtube.com/watch?v=CBtBZgmP22M

注意事项：mac 可能出现版本不兼容现象，换对应的版本下载就好了。

要想使用 mysql 指令集，需要在.zshrc 文件中添加

` export PATH=$PATH:/usr/local/mysql/bin`

## (时间戳用 int 类型来存储)[https://zhuanlan.zhihu.com/p/237832008]

数值型时间戳（INT）很多时候，我们也会使用 int 或者 bigint 类型的数值也就是时间戳来表示时间。这种存储方式的具有 Timestamp 类型的所具有一些优点，并且使用它的进行日期排序以及对比等操作的效率会更高，跨系统也很方便，毕竟只是存放的数值。缺点也很明显，就是数据的可读性太差了，你无法直观的看到具体时间。如果需要查看某个时间段内的数据

https://zhuanlan.zhihu.com/p/386702884

## 理解范式

如何理解关系型数据库的常见设计范式？ - 知乎用户的回答 - 知乎
https://www.zhihu.com/question/24696366/answer/29189700

## mysql 分页查询

- https://cloud.tencent.com/developer/article/1529301

## 常用 mysql 指令

- 用户登陆  
  `mysql -u root p`

- 展示数据库
  `SHOW DATABASES;`

- 创建数据库
  `CREATE DATABASE dragon_sys`
  注：使用 root 登录后，可以使用

CREATE DATABASE IF NOT EXISTS RUNOOB DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
创建数据库，该命令的作用：

1.  如果数据库不存在则创建，存在则不创建。
2.  创建 RUNOOB 数据库，并设定编码集为 utf8

- 删除数据库
  `drop database dragon_sys`

- 使用数据库
  `use dragon_sys `
- 创建表
  ``

- 分页

基本分页模式

`SELECT ... FROM ... WHERE ... ORDER BY ... LIMIT ...`

`select * from \_table limit (page_number-1)*lines_perpage, lines_perpage`

`select * from \_table limit lines_perpage offset (page_number-1)*lines_perpage`

子查询的方式来提高分页效率

- where 语句的执行顺序

```
FROM, including JOINs
WHERE
GROUP BY
HAVING
WINDOW functions
SELECT
DISTINCT
UNION
ORDER BY
LIMIT and OFFSET
```

## delete drop, truncate 区别

delete，drop，truncate 都有删除表的作用，区别在于：

1、delete 和 truncate 仅仅删除表数据，drop 连表数据和表结构一起删除，打个比方，delete 是单杀，truncate 是团灭，drop 是把电脑摔了。
2、delete 是 DML 语句，操作完以后如果没有不想提交事务还可以回滚，truncate 和 drop 是 DDL 语句，操作完马上生效，不能回滚，打个比方，delete 是发微信说分手，后悔还可以撤回，truncate 和 drop 是直接扇耳光说滚，不能反悔。
3、执行的速度上，drop>truncate>delete，打个比方，drop 是神舟火箭，truncate 是和谐号动车，delete 是自行车。

## MySQL 数据类型

int:4 个字节 ，存储时间戳
char():0-255
varChar():0-65535 bytes

## MYSQL 编码问题

https://cloud.tencent.com/developer/article/1596910

## MYSQL 事务

事务处理可以用来维护数据库的完整性，保证成批的 SQL 语句要么全部执行，要么全部不执行。
事务用来管理 insert,update,delete 语句

查询也要注意 NULL 的情况。age is not null

## MySQL 的覆盖索引与回表 - 张德检的文章 - 知乎

https://zhuanlan.zhihu.com/p/107125866

- 实现方式，将被查询的字段，建立到联合索引里去。

` drop index idx_age on user; create index idx_age_name on user(`age`,`name`); `

联表基本操作: inner join xx on xx

## MYSQL join， left join,right join

图解 SQL 的 inner join、left /right join、 outer join 区别 - 张小森的文章 - 知乎
https://zhuanlan.zhihu.com/p/59656673

## sql 窗口函数

通俗易懂的学会：SQL 窗口函数
https://zhuanlan.zhihu.com/p/92654574

## MYSQL 与 Nest 的案例参考

- 后续研究，目前先建立数据库

```

```

## 操作系统

操作系统：控制程序，管理程序，提供服务，杀死应用程序，管理外设，分配资源

并发，多个程序运行

并发（一段时间）与并行（某个时间节点，多个程序运行，需要多核 cpu）的概念

共享，互斥共享
虚拟：多道程序设计，每个用户都觉得有一台计算机为其服务
异步：

发展： 纸带输入->批处理（cpu 能力增强，并行）->多道处理程序（内存提交，载入多个程序，并发执行）->分时调度

操作系统的模块化：

disk 存放 os

bios :基本 i/o 处理系统，检查外设， bootloader，加载 os 完后，cpu 控制权交个 os

post (加电自检)寻找显卡和执行 bios

系统调用：应用程序向操作系统发出的特殊指令，完成某个服务
异常：非法指令或者其他坏的处理状态（应用程序）
中断：来自不同的硬件设备的计数器和网络中断（外设）

在计算机运行中，内核是被信任的第三方
只有内核可以执行特权指令
屏蔽底层的复杂，其实是抽象

处理时间
中断：异步（不知道什么时候产生）
异常：同步
系统调用：异步或同步

中断表-》地址

硬件：设置中断标记 中断事件的 id
软件：保存当前处理状态
中断服务程序处理
清除中断标记
恢复之前保存的处理状态

异常： 异常标号
保存现场
异常处理 - 杀死产生的异常的程序 - 重新执行异常指令
恢复现场

系统调用：win32 posix API

- 程序的访问主要是通过高层次的 api 接口而不是直接进行系统调用

用户态：无法特权  
内核态：特权指令
上述两者之间的调用

管理物理内存：

计算机体系结构/内存分层体系

在操作系统中管理内存的不同方法

- 程序重定位
- 分段
- 分页
- 虚拟内存
- 按需分页虚拟内存

地址空间：物理地址空间（硬件）（ 映射关系）逻辑（软件）
地址生成：
地址安全生成：

连续内存分配：

- 内存碎片问题：没有进一步被使用的空间，外部碎片，内部碎片

空闲，菲空间

### 分配算法：

- 首次适配 （外部碎片，不确定呢）
- 最优适配 （最适合满足，力度比分配请求大，差值最小）
  （外部碎片，重分配慢，产生很多没用的微笑碎片）排序
- 最差匹配分配：排序

减少碎片：

- 压缩式碎片整理
- 要求所有程序是动态可重置的
- 议题 何时重置，开销
- 2: 交换式碎片整理
- 抢占等待的程序&回收它们的内存

为什么需要非连续内存管理物理内存？

- 一个程序的物理地址空间是非连续的
- 更好的内存利用和管理
- 允许共享代码与数据（共享库等。。。）
- 支持动态加载和动态链接
  问题： 如何建立虚拟地址和物理地址之间的转换？
  - 软件方案 开销较大
  - 硬件方案

两种硬件方案
（不懂～～～）

- 分段 ： 更好的分离和共享
  - 程序的分段地址空间
  - 分段寻址方案
- 分页
  分页地址空间

页表（映射机制）

## 进程管理

- 进程的定义，组成，特点，控制结构
  程序整个的执行过程
  一个具有一定独立功能的程序在一个数据集合上的一次动态执行过程
  进程和程序的区别

PCB:进程标识，父进程，处理机状态信息保存区
用户可见寄存器，控制和状态寄存器，栈指针

进程的生命周期状态

创建态，就绪态，运行态，阻塞态，结束态

进程挂起：进程没有占用内存空间

阻塞挂起： 进程在外存在并等待某事件的出现
就绪态挂起状态：进程在外存，但只要进入内存，即可运行

就绪挂起到就绪
阻塞挂起到阻塞

状态队列 管理进程状态的一个很重要的数据结构

线程管理

- 为什么使用线程  
   进程创建，状态切换开销大。
  （1）实体之间可以并发执行
  （2）实体之间共享相同的地址空间
- 什么是线程

  - 这个实体就是线程
  - 进程当中的一条执行流程
    从资源整合的角度，进程把一组相关的资源整合起来，
    构成了一个资源平台（环境），包括地址空间（代码段，数据端，）打开的文件等各种资源
    从运行的角度：代码在这个资源平台上的一条执行流程（线程）

    进程缺点：一个线程崩溃，会导致其所属进程的所有线程崩溃。
    TCB
    思考：进程和线程的选择

- 线程的实现
  （第三方库）
  - 用户线程（操作系统看不到，用户线程库管理，又一组用户级别的线程库函数来完成线程管理，创建，销毁，同步，调度）
  - 内核线程 （操作系统）
  - 轻量级线程

进程是资源分配单位，线程是 cpu 调度单位。

CPU 调度

虚拟文件系统。

锁：读锁，写锁，共享锁，排他锁，锁的粒度，它的代价，表锁，行级锁
select from

基准测试，就是检测数据库的承载情况
