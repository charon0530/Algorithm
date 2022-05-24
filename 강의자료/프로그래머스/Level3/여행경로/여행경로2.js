function solution(tickets) {
    let answer = [];
    let ticket_obj = {};
    let ticket_count_obj = {};
    tickets.forEach((ticekt) => {
        const [dep, arv] = ticekt;
        if (ticket_obj[dep] !== undefined) {
            ticket_obj[dep].push(arv);
        } else {
            ticket_obj[dep] = [arv];
        }
        ticket_count_obj[dep + "," + arv] =
            ticket_count_obj[dep + "," + arv] + 1 || 1;
    });

    function DFS(node, path) {
        if (
            path.length !== tickets.length + 1 &&
            Object.keys(ticket_obj).includes(node) === false
        )
            return;
        if (path.length === tickets.length + 1) {
            answer.push([...path]);
        } else {
            for (let next of ticket_obj[node]) {
                if (ticket_count_obj[node + "," + next] === 0) continue;

                ticket_count_obj[node + "," + next] -= 1;
                path.push(next);
                DFS(next, path);
                ticket_count_obj[node + "," + next] += 1;
                path.pop();
            }
        }
    }

    DFS("ICN", ["ICN"]);
    return answer;
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
