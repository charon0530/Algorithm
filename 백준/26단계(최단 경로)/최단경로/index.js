var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [V, E] = input[0].split(" ").map(Number);
    const start = Number(input[1]);
    const graph = Array.from({ length: V + 1 }, () => []);
    for (let i = 2; i < 2 + E; i++) {
        const [s, e, c] = input[i].split(" ").map(Number);
        graph[s].push([e, c]);
        //graph[e].push([s, c]);
    }
    console.table(graph);

    const visited = new Array(V + 1).fill(0);
    const distArr = new Array(V + 1).fill(Number.MAX_SAFE_INTEGER);
    distArr[start] = 0;
    while (true) {
        let curNode = -1;
        let minVal = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i <= V; i++) {
            if (visited[i] === 1) continue;
            if (distArr[i] === Number.MAX_SAFE_INTEGER) continue;
            if (minVal > distArr[i]) {
                minVal = distArr[i];
                curNode = i;
            }
        }
        if (curNode === -1) break;

        visited[curNode] = 1;

        for (let [next, nCost] of graph[curNode]) {
            if (visited[next] === 1) continue;
            const newCost = distArr[curNode] + nCost;
            if (newCost < distArr[next]) {
                distArr[next] = newCost;
            }
        }
    }
    let str = "";
    for (let i = 1; i <= V; i++) {
        if (distArr[i] === Number.MAX_SAFE_INTEGER) str += "INF\n";
        else str += distArr[i] + "\n";
    }
    console.log(str);
}

solution(param);
