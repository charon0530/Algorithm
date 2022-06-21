var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const n = Number(input[0]);
    const m = Number(input[1]);
    const [s, e] = input[m + 2].split(" ").map(Number);
    const graph = Array.from({ length: n + 1 }, () => []);
    const parent = new Array(n + 1).fill(-1);
    const visited = new Array(n + 1).fill(0);
    const dist = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    for (let i = 2; i < m + 2; i++) {
        const [s, e, c] = input[i].split(" ").map(Number);
        graph[s].push([e, c]);
    }

    dist[s] = 0;
    while (true) {
        let minVal = Number.MAX_SAFE_INTEGER;
        let curNode = -1;
        for (let i = 1; i <= n; i++) {
            if (dist[i] === Number.MAX_SAFE_INTEGER) continue;
            if (visited[i] === 1) continue;
            if (minVal > dist[i]) {
                minVal = dist[i];
                curNode = i;
            }
        }
        if (curNode === -1) break;

        visited[curNode] = 1;
        for (const [next, cost] of graph[curNode]) {
            if (visited[next] === 1) continue;
            const newCost = dist[curNode] + cost;
            if (dist[next] >= newCost) {
                dist[next] = newCost;
                parent[next] = curNode;
            }
        }
    }

    console.log(dist[e]);
    let num = e;
    let result = [];
    while (num !== -1) {
        result.push(num);
        num = parent[num];
    }
    console.log(result.length);
    console.log(result.reverse().join(" "));
}

solution(param);
