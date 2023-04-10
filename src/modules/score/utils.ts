function filterGroupFirst(data) {
    // 将数据按组号进行分组
    const groups = data.reduce((acc, cur) => {
      if (!acc[cur.group_number]) {
        acc[cur.group_number] = [];
      }
      acc[cur.group_number].push(cur);
      return acc;
    }, {});
  
    // 遍历每个组，剔除得分最低的数据
    const result = [];
    Object.keys(groups).forEach(groupNumber => {
      const groupData = groups[groupNumber];
      const minScore = Math.min(...groupData.map(item => item.score));
      const filteredGroupData = groupData.filter(item => item.score > minScore);
      result.push(...filteredGroupData);
    });
  
    return result;
  }

  type Data = {
    round_type: number;
    group_number: number;
    team_id: number;
    score: number;
  };

  function getGroupFirstByLen(data: Data[], len: number): Data[] {
    // 根据 group_number 进行分组
    const groupedData: { [key: number]: Data[] } = {};
    data.forEach((item) => {
      const { group_number } = item;
      if (!groupedData[group_number]) {
        groupedData[group_number] = [];
      }
      groupedData[group_number].push(item);
    });
  
    // 对每个分组取最低的前 len 个
    const result: Data[] = [];
    Object.values(groupedData).forEach((group) => {
      const sortedGroup = group.sort((a, b) => a.score - b.score);
      const topLen = Math.min(len, sortedGroup.length);
      result.push(...sortedGroup.slice(0, topLen));
    });
  
    return result;
  }



  function rankTeams(data: {round_type: number, group_number: number, team_name: string, score: number}[]) {
    const groupMap = new Map();
  
    for (const item of data) {
      const { round_type, group_number, team_name, score } = item;
  
      if (!groupMap.has(`${round_type}-${group_number}`)) {
        groupMap.set(`${round_type}-${group_number}`, []);
      }
  
      groupMap.get(`${round_type}-${group_number}`).push({ ...item });
    }
  
    const result = [];
  
    for (const [group, teams] of groupMap) {
      teams.sort((a, b) => b.score - a.score);
  
      const rankedTeams = teams.map((team, index) => ({ ...team, no: teams.length - index }));

      rankedTeams.sort((a, b) => a.score - b.score);

      result.push({
        content_name:teams[0].content_name,
        round_type: teams[0].round_type,
        group_number: teams[0].group_number,
        data: rankedTeams
      });
    }
  
    return result;
  }
  
  

  export {filterGroupFirst,getGroupFirstByLen,rankTeams}