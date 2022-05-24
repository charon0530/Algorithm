function solution(id_list = [], report = [], k) {
    const answer = [];
    report = [...new Set(report)];
    const report_dict = {};
    id_list.forEach((x) => (report_dict[x] = []));

    const ban_count_dict = {};
    id_list.forEach((x) => (ban_count_dict[x] = 0));
    report.forEach((x) => {
        const [from, to] = x.split(" ");
        report_dict[from].push(to);
        ban_count_dict[to]++;
    });

    console.log(report_dict);
    console.log(ban_count_dict);

    const filtered_ban_list = [];
    for (let [name, count] of Object.entries(ban_count_dict)) {
        if (count >= k) filtered_ban_list.push(name);
    }
    console.log(filtered_ban_list);

    for (let i = 0; i < id_list.length; i++) {
        const cur_id = id_list[i];
        const cur_list = report_dict[cur_id];
        const count = cur_list.filter((x) =>
            filtered_ban_list.includes(x)
        ).length;
        answer.push(count);
    }
    return answer;
}

console.log(
    solution(
        ["muzi", "frodo", "apeach", "neo"],
        ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
        2
    )
);
