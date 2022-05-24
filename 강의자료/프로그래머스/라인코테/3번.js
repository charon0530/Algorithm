function solution(num_teams, remote_tasks, office_tasks, employees) {
    var answer = [];
    //dict[팀] = 팀원
    //재택list = 재택대상자
    const team_dict = {};
    const target_list = [];
    for (let i = 0; i < num_teams; i++) {
        const number = i + 1;
        team_dict[number] = new Set();
    }
    for (let i = 0; i < employees.length; i++) {
        const cur_log = employees[i];
        const num = i + 1;
        const t_num = Number(cur_log.split(" ")[0]);
        team_dict[t_num].add(num);
        const tasks = cur_log.split(" ");
        tasks.shift();
        if (tasks.every((x) => remote_tasks.includes(x))) {
            target_list.push(num);
        }
    }
    //팀에 속한 팀원이 모두 재택 대상자라면 해당 팀의 가장 빠른 번호는 재택에서 제외
    for (let i = 0; i < num_teams; i++) {
        const team_num = i + 1;
        const list = [...team_dict[team_num]].sort(
            (a, b) => Number(a) - Number(b)
        );
        if (list.every((x) => target_list.includes(x))) {
            const picked = list[0];
            target_list.splice(target_list.indexOf(picked), 1);
        }
    }
    return target_list;
}
console.log(
    solution(
        3,
        ["development", "marketing", "hometask"],
        ["recruitment", "education", "officetask"],
        [
            "1 development hometask",
            "1 recruitment marketing",
            "2 hometask",
            "2 development marketing hometask",
            "3 marketing",
            "3 officetask",
            "3 development",
        ]
    )
);
