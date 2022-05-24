function solution(orders, course) {
    let answer = [];
    //sort orders
    orders = orders.map((x) => x.split("").sort().join(""));

    //make order_comb_dic
    let dic = {};
    for (let i = 0; i < orders.length; i++) {
        let order_str = orders[i];

        function DFS(pick_idx, menu) {
            if (pick_idx === order_str.length) {
                if (menu.length >= 2) {
                    dic[menu] = dic[menu] + 1 || 1;
                }
            } else {
                DFS(pick_idx + 1, menu);
                DFS(pick_idx + 1, menu + order_str[pick_idx]);
            }
        }

        DFS(0, "");
    }

    let wanted_dic = {};
    course.forEach((times) => {
        for (let [key, val] of Object.entries(dic)) {
            if (key.length === times) {
                if (wanted_dic[times]) {
                    wanted_dic[times].push([key, val]);
                } else {
                    wanted_dic[times] = [[key, val]];
                }
            }
        }
        if (wanted_dic[times]) {
            wanted_dic[times]
                .sort((a, b) => b[1] - a[1])
                .filter((x) => x[1] === wanted_dic[times][0][1] && x[1] >= 2)
                .forEach((arr) => {
                    answer.push(arr[0]);
                });
        }
    });

    return answer.sort();
}

console.log(
    solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
);
