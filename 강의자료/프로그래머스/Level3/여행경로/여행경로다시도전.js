function solution(tickets = [[]]) {
    let answer = [];
    let ticket_dic = {};
    tickets.forEach((ticket) => {
        let [from, to] = ticket;
        if (ticket_dic[from] === undefined) {
            ticket_dic[from] = [to];
        } else {
            ticket_dic[from].push(to);
        }
    });
    console.log(ticket_dic);
    function DFS(node, path) {
        if (path.length === tickets.length) {
            answer.push([...path]);
        } else {
            if (ticket_dic[node] === undefined) return;
            for (let i = ticket_dic[node].length - 1; i >= 0; i--) {
                let [next] = ticket_dic[node].splice(i, 1);
                let temp_path = [...path, next];
                DFS(next, temp_path);
                ticket_dic[node].push(next);
            }
        }
    }
    DFS("ICN", []);
    answer = answer.sort()[0];
    answer.unshift("ICN");
    return answer;
}

console.log(
    solution([
        ["ICN", "A"],
        ["ICN", "B"],
        ["B", "ICN"],
    ])
);
