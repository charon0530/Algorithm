function solution(tickets) {
    let answer = [];
    let dic = {};
    let check_dic = {};
    tickets.forEach((ticket) => {
        let [s, e] = ticket;
        if (dic[s] === undefined) {
            dic[s] = [e];
        } else {
            dic[s].push(e);
        }
        if (check_dic[s + e] === undefined) {
            check_dic[s + e] = 1;
        } else {
            check_dic[s + e]++;
        }
    });

    function DFS(cur_node, count, list) {
        if (count === tickets.length) {
            answer.push([...list]);
        } else {
            if (dic[cur_node] === undefined) return;
            for (let next of dic[cur_node]) {
                if (check_dic[cur_node + next] === 0) continue;

                check_dic[cur_node + next]--;
                list.push(next);
                DFS(next, count + 1, [...list]);
                list.pop();
                check_dic[cur_node + next]++;
            }
        }
    }
    DFS("ICN", 0, ["ICN"]);
    return answer.sort();
}

console.log(
    solution([
        ["ICN", "COO"],
        ["ICN", "BOO"],
        ["COO", "ICN"],
    ])
);
