var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [V, E] = input[0].split(" ").map(Number);
    let answer = 0;
    let inputIdx = 1;
    const graph = Array.from({ length: V + 1 }, () => []);
    for (let i = 0; i < E; i++) {
        const [A, B, C] = input[inputIdx++].split(" ").map(Number);
        graph[A].push([B, C]);
        graph[B].push([A, C]);
    }

    const dist = new Array(V + 1).fill(Number.MAX_SAFE_INTEGER);
    const visited = new Array(V + 1).fill(0);
    dist[1] = 0;

    while (true) {
        let cur = -1;
        let curVal = Number.MAX_SAFE_INTEGER;

        for (let i = 1; i <= V; i++) {
            if (dist[i] === Number.MAX_SAFE_INTEGER) continue;
            if (visited[i] === 1) continue;
            if (curVal > dist[i]) {
                cur = i;
                curVal = dist[i];
            }
        }
        if (cur === -1) break;

        visited[cur] = 1;
        answer += dist[cur];
        for (const [next, nCost] of graph[cur]) {
            if (visited[next] === 1) continue;

            if (nCost < dist[next]) {
                dist[next] = nCost;
            }
        }
    }
    console.log(answer);
}

solution(param);
