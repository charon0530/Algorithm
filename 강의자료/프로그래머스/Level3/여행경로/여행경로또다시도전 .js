function DFS(node = "", tickets = [[]], path = [], output = []) {
    if (tickets.length === 0) {
        output.push([...path]);
    } else {
        for (let i = 0; i < tickets.length; i++) {
            let [from, to] = tickets[i];
            if (from !== node) continue;

            let next_ticekts = [...tickets];
            next_ticekts.splice(i, 1);
            DFS(to, next_ticekts, [...path, to], output);
        }
    }
}

function solution(tickets = [[]]) {
    let answer = [];
    DFS("ICN", tickets, ["ICN"], answer);
    answer = answer.sort()[0];
    return answer;
}

console.log(
    solution([
        ["ICN", "JFK"],
        ["HND", "IAD"],
        ["JFK", "HND"],
    ])
);
