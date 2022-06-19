var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");
var fs = require("fs");
var param = fs
    .readFileSync(0) // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let str = "";
    const T = Number(input[0]);
    let lineIdx = 1;
    for (let i = 0; i < T; i++) {
        const [n, m, t] = input[lineIdx++].split(" ").map(Number);
        const [s, g, h] = input[lineIdx++].split(" ").map(Number);
        const graph = Array.from({ length: n + 1 }, () => []);
        for (let j = 0; j < m; j++) {
            const [a, b, d] = input[lineIdx++].split(" ").map(Number);
            graph[a].push([b, d]);
            graph[b].push([a, d]);
        }
        const canList = [];
        for (let j = 0; j < t; j++) {
            canList.push(Number(input[lineIdx++]));
        }
        function Djikstra(start) {
            const visited = new Array(n + 1).fill(0);
            const dist = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

            dist[start] = 0;

            while (true) {
                let curNode = -1;
                let minVal = Number.MAX_SAFE_INTEGER;

                for (let j = 1; j <= n; j++) {
                    if (visited[j] === 1) continue;
                    if (dist[j] === Number.MAX_SAFE_INTEGER) continue;
                    if (minVal > dist[j]) {
                        curNode = j;
                        minVal = dist[j];
                    }
                }
                if (curNode === -1) break;
                visited[curNode] = 1;

                for (let [nNode, nCost] of graph[curNode]) {
                    if (visited[nNode] === 1) continue;

                    const newCost = dist[curNode] + nCost;
                    if (newCost < dist[nNode]) {
                        dist[nNode] = newCost;
                    }
                }
            }
            return dist;
        }

        const resultList = [];
        //s -> g -> h -> canNode
        const distS = Djikstra(s);
        const distG = Djikstra(g);
        const distH = Djikstra(h);
        for (let canNode of canList) {
            const minVal = Math.min(
                distS[g] + distG[h] + distH[canNode],
                distS[h] + distH[g] + distG[canNode]
            );
            if (minVal === distS[canNode]) {
                resultList.push(canNode);
            }
        }
        resultList.sort((a, b) => a - b);
        for (let val of resultList) {
            str += val + " ";
        }
        str += "\n";
    }
    console.log(str);
}

solution(param);
