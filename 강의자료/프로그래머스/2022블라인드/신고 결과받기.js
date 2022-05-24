function solution(id_list, report, k) {
    var answer = [];
    report = [...new Set(report)];
    const user_report = {};
    const report_count = {};
    id_list.forEach((id) => {
        user_report[id] = new Set();
    });
    report.forEach((re) => {
        const [from, to] = re.split(" ");
        user_report[from].add(to);
        report_count[to] = (report_count[to] || 0) + 1;
    });
    const banned_list = [];
    for (let [key, value] of Object.entries(report_count)) {
        if (value >= k) {
            banned_list.push(key);
        }
    }

    id_list.forEach((id) => {
        let temp = 0;
        banned_list.forEach((b_id) => {
            if (user_report[id].has(b_id)) temp++;
        });
        answer.push(temp);
    });

    return answer;
}

console.log(
    solution(
        ["con", "ryan"],
        ["ryan con", "ryan con", "ryan con", "ryan con"],
        3
    )
);
