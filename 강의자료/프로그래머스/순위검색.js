function solution(info, query) {
    let answer = [];
    //make combination dic
    let dic = {};
    info.forEach((line) => {
        let splited_line = line.split(" ");
        let [lang, job, career, food, score] = splited_line;

        function DFS(pick_idx, str) {
            if (pick_idx === splited_line.length - 1) {
                if (dic[str]) {
                    dic[str].push(score);
                } else {
                    dic[str] = [score];
                }
            } else {
                DFS(pick_idx + 1, str + splited_line[pick_idx]);
                DFS(pick_idx + 1, str + "-");
            }
        }
        DFS(0, "");
    });

    //sort dic
    for (let key of Object.keys(dic)) {
        dic[key] = dic[key].map((x) => Number(x)).sort((a, b) => b - a);
    }
    //console.log(dic);

    query.forEach((line) => {
        let splited_line = line.split(" ").filter((x) => x !== "and");
        let search_key = splited_line.slice(0, 4).join("");
        let score = Number(splited_line.slice(4));

        let list = dic[search_key];
        //console.log(search_key, list);
        //search (binary search)
        if (list) {
            let lt = 0;
            let rt = list.length - 1;
            let max = -1;

            while (lt <= rt) {
                let mid = Math.floor((lt + rt) / 2);
                if (list[mid] >= score) {
                    max = mid;
                    lt = mid + 1;
                } else if (list[mid] < score) {
                    rt = mid - 1;
                }
            }
            answer.push(max + 1);
        } else {
            answer.push(0);
        }
    });
    return answer;
}

console.log(
    solution(
        [
            "java backend junior pizza 150",
            "python frontend senior chicken 210",
            "python frontend senior chicken 150",
            "cpp backend senior pizza 260",
            "java backend junior chicken 80",
            "python backend senior chicken 50",
        ],
        [
            "java and backend and junior and pizza 100",
            "python and frontend and senior and chicken 200",
            "cpp and - and senior and pizza 250",
            "- and backend and senior and - 150",
            "- and - and - and chicken 100",
            "- and - and - and - 150",
        ]
    )
);
