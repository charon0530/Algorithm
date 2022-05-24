function solution(tickets) {
    var answer = [];
    let can_go_dict = {};
    let ch_dict = {};
    tickets.forEach((ticket) => {
        const [dep, arv] = ticket;
        ch_dict[dep] = [];

        can_go_dict[dep] === undefined
            ? (can_go_dict[dep] = [arv])
            : can_go_dict[dep].push(arv);
    });

    function DFS(node, path) {
        if (path.length === tickets.length + 1) {
            answer.push([...path]);
        } else {
            for (let next of can_go_dict[node]) {
                if (ch_dict[node].includes(next)) continue;
                ch_dict[node].push(next);
                path.push(next);
                DFS(next, path);
                ch_dict[node].pop();
                path.pop();
            }
        }
    }

    DFS("ICN", ["ICN"]);
    return answer.sort()[0];
}

console.log(
    solution([
        ["ICN", "AOO"],
        ["AOO", "BOO"],
        ["AOO", "BOO"],
        ["BOO", "AOO"],
        ["BOO", "FOO"],
        ["FOO", "COO"],
        ["COO", "ZOO"],
    ])
);
