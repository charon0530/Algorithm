var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, E] = input[0].split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);
    let lineIdx = 1;
    for (let i = 0; i < E; i++) {
        const [s, e, c] = input[lineIdx++].split(" ").map(Number);
        graph[s].push([e, c]);
        graph[e].push([s, c]);
    }
    const [s, e] = input[lineIdx++].split(" ").map(Number);
    console.table(graph);
    console.log(s, e);

    function Djikstra(start) {
        const visited = new Array(N + 1).fill(0);
        const distArr = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
        distArr[start] = 0;
        while (true) {
            let curNode = -1;
            let minVal = Number.MAX_SAFE_INTEGER;
            for (let i = 1; i <= N; i++) {
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
        return distArr;
    }
    const dist1 = Djikstra(1);
    const distS = Djikstra(s);
    const distE = Djikstra(e);
    const result = Math.min(
        dist1[s] + distS[e] + distE[N],
        dist1[e] + distE[s] + distS[N]
    );
    // console.log(dist1[s] + distS[e] + distE[N]);
    // console.log(dist1[e] + distE[s] + distS[N]);
    console.log(result >= Number.MAX_SAFE_INTEGER ? -1 : result);
}

solution(param);
