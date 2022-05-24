function solution(tickets) {
    let answer = [];
    function DFS(cur_node, tickets, path) {
        if (tickets.length === 0) {
            answer.push([...path]);
            return;
        }
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i][0] !== cur_node) continue;

            let copy = tickets.map((line) => line.slice());
            let cut_ticket = copy.splice(i, 1)[0];

            DFS(cut_ticket[1], copy, [...path, cut_ticket[1]]);
        }
    }
    DFS("ICN", tickets, ["ICN"]);
    return answer.sort();
}

console.log(
    solution([
        ["ICN", "SFO"],
        ["ICN", "ATL"],
        ["SFO", "ATL"],
        ["ATL", "ICN"],
        ["ATL", "SFO"],
    ])
);
