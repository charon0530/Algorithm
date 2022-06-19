// 반례 input

// 1
// 4 4 1
// 1 3 4
// 1 2 3
// 2 4 4
// 1 3 4
// 3 4 3
// 4

// output

// answer

// 4

// 시작지에서 도착지까지 최단경로가 여러개 있을경우 찾지 못할수도 있어요

var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
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
        const visited = new Array(n + 1).fill(0);
        const dist = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
        const queue = [];
        const parent = new Array(n + 1).fill(-1);
        for (j = 1; j <= n; j++) {
            parent[j] = j;
        }
        dist[s] = 0;
        queue.push(s);
        while (queue.length) {
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
                    parent[nNode] = curNode;
                    dist[nNode] = newCost;
                }
            }
        }
        const resultList = [];

        for (let canNode of canList) {
            const temp = canNode;
            let path = [canNode];
            let canNodeP = parent[canNode];
            while (canNode !== canNodeP) {
                path.push(canNodeP);
                canNode = canNodeP;
                canNodeP = parent[canNode];
            }
            path = "," + path.join(",") + ",";
            if (path.includes(`,${g},${h},`) || path.includes(`,${h},${g},`)) {
                resultList.push(temp);
                continue;
            }

            //console.log("후보", temp, path);
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
