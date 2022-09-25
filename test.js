function test(routeNumber, teamNumber) {
  //  队伍数,

  // 预赛
  let pre = null;
  // 复赛
  let reCome = 0;

  let half = null;

  let end = null;

  pre = [
    {
      id: 1,
      name: '预赛1',
      assign: [
        {
          preId: 1,
          route: 1,
          teamName: '',
          scores: '',
        },
        {
          preId: 1,
          route: 2,
          teamName: '',
          scores: '',
        },
        {
          preId: 1,
          route: 3,
          teamName: '',
          scores: '',
        },
        {
          preId: 1,
          route: 4,
          teamName: '',
          scores: '',
        },
      ],
    },
    {
      id: 2,
      name: '预赛2',
      assign: [
        {
          preId: 2,
          route: 1,
          teamName: '',
          scores: '',
        },
        {
          preId: 2,
          route: 2,
          teamName: '',
          scores: '',
        },
        {
          preId: 2,
          route: 3,
          teamName: '',
          scores: '',
        },
        {
          preId: 2,
          route: 4,
          teamName: '',
          scores: '',
        },
      ],
    },
  ];

  half = [
    {
      id: 1,
      name: '半决赛1',
      assign: [
        {
          route: 1,
          teamName: '预之8',
          scores: '',
        },
        {
          route: 2,
          teamName: '预之4',
          scores: '',
        },
        {
          route: 3,
          teamName: '预之5',
          scores: '',
        },
      ],
    },
    {
      id: 2,
      name: '半决赛2',
      assign: [
        {
          route: 1,
          teamName: '预之7',
          scores: '',
        },
        {
          route: 2,
          teamName: '预之3',
          scores: '',
        },
        {
          route: 3,
          teamName: '预之6',
          scores: '',
        },
      ],
    },
  ];

  end = [
    {
      id: 1,
      name: '决赛',
      assign: [
        {
          route: 1,
          teamName: '半决1',
          scores: '',
        },
        {
          route: 2,
          teamName: '预之1',
          scores: '',
        },
        {
          route: 3,
          teamName: '预之2',
          scores: '',
        },
        {
          route: 3,
          teamName: '半决2',
          scores: '',
        },
      ],
    },
  ];

  // 随机抽签
  const preAssignResult = randAssign(pre);
  // 输入成绩

  const scores = enterScore(preAssignResult);

  //

  /*
        pre
    */
}

function randArr(teams) {
  let i = teams.length,
    k,
    temp; // k is to generate random index and temp is to swap the values
  while (--i > 0) {
    k = Math.floor(Math.random() * (i + 1));
    temp = teams[k];
    teams[k] = teams[i];
    teams[i] = temp;
  }

  return teams;
}

// 抽签赛道
function randAssign(pre) {
  // 随机算法，
  const teams = randArr([
    { teamId: 1, teamName: '龙王' },
    { teamId: 2, teamName: '深圳' },
    { teamId: 3, teamName: '上海' },
    { teamId: 4, teamName: '广州' },
    { teamId: 5, teamName: '肇庆' },
    { teamId: 6, teamName: '云南' },
    { teamId: 7, teamName: '海南' },
    { teamId: 8, teamName: '北京' },
  ]);

  const group = [];

  const assignResult = [];

  for (item of pre) {
    group.push(...item.assign);
  }

  for (let i = 0; i < teams.length; i++) {
    assignResult.push({ ...teams[i], ...group[i] });
  }
  return assignResult;
}

function enterScore() {}

function enterScore() {}

function generateFirstGroup(arr, groupNumber) {
  let index = 0;

  let group = [];
  let flag = true;

  while (index < arr.length) {
    group.push(arr[index]);
    index = flag ? index + (groupNumber * 2 - 1) : index + 1;
    flag = !flag;
  }

  return group;
}

function generateSnakePosition(arr, groupNumber) {
  // 处理原始数据，补成 groupNumber 和 arr 的倍数
  const max = arr.at(-1);
  let copy = max;
  while (copy % groupNumber != 0) {
    arr.push(++copy);
  }

  let res = [];
  let temp = [];
  let currentGroup = 1;
  let last = generateFirstGroup(arr, groupNumber);
  res.push(last);
  // 上一位数的概念?
  while (currentGroup < groupNumber) {
    for (let i = 0; i < last.length; i++) {
      if (i % 2 === 0) {
        temp.push(last[i] + 1);
      } else {
        temp.push(last[i] - 1);
      }
    }

    res.push(temp);
    // 重置
    last = temp.slice();

    temp = [];
    currentGroup++;
  }
  // 过滤掉大于
  return res.map((item) => item.filter((item) => item <= max));
}
console.log(generateSnakePosition([7, 8, 9, 10, 11, 12, 13, 14], 3));

/** 赛道匹配算法 */
function routeMatchGrade(grade, routeNumber) {
  const routeMap = new Map();
  routeMap.set(4, [
    { routeNo: 1, rank: 3 },
    { routeNo: 2, rank: 1 },
    { routeNo: 3, rank: 2 },
    { routeNo: 4, rank: 4 },
  ]);
  routeMap.set(6, [
    { routeNo: 1, rank: 5 },
    { routeNo: 2, rank: 3 },
    { routeNo: 3, rank: 1 },
    { routeNo: 4, rank: 2 },
    { routeNo: 5, rank: 4 },
    { routeNo: 6, rank: 6 },
  ]);
  routeMap.set(8, [
    { routeNo: 1, rank: 7 },
    { routeNo: 2, rank: 5 },
    { routeNo: 3, rank: 3 },
    { routeNo: 4, rank: 1 },
    { routeNo: 5, rank: 2 },
    { routeNo: 6, rank: 4 },
    { routeNo: 7, rank: 6 },
    { routeNo: 8, rank: 8 },
  ]);

  // if()
}
// console.log(generateSnakePosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));
// console.log(generateSnakePosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
// console.log(generateSnakePosition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2));

// 决赛表

[
  {
    dragonPathNumber: 4,
    group: [
      {
        teamNumber: 8,
        preGroupNumber: 2,
        rematchGroupNumber: 0,
        semifinal: 2,
        final: 2, // 决赛，小决赛
      },
      {
        teamNumber: 6,
        preGroupNumber: 2,
        rematchGroupNumber: 0,
        semifinal: 1,
        final: 2, // 决赛，小决赛
      },
      {
        teamNumber: 12,
        preGroupNumber: 3,
        rematchGroupNumber: 2,
        semifinal: 2,
        final: 3, // 决赛，小决赛
      },
      {
        teamNumber: 16,
        preGroupNumber: 4,
        rematchGroupNumber: 3,
        semifinal: 2,
        final: 3, // 决赛，小决赛
      },
      {
        teamNumber: 20,
        preGroupNumber: 5,
        rematchGroupNumber: 3,
        semifinal: 3,
        final: 3, // 决赛，小决赛
      },
    ],
  },
  {
    dragonPathNumber: 6,
    group: [
      {
        teamNumber: 12,
        preGroupNumber: 2,
        rematchGroupNumber: 0,
        semifinal: 2,
        final: 2, // 决赛，小决赛
      },
      {
        teamNumber: 8,
        preGroupNumber: 2,
        rematchGroupNumber: 0,
        semifinal: 1,
        final: 2, // 决赛，小决赛
      },
      {
        teamNumber: 18,
        preGroupNumber: 3,
        rematchGroupNumber: 2,
        semifinal: 2,
        final: 3, // 决赛，小决赛,排名赛。
      },
    ],
  },
];
