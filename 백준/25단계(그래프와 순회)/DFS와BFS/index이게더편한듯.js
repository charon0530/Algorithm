var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M, V] = input[0].split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => []);
    for (let i = 1; i <= M; i++) {
        const [s, e] = input[i].split(" ").map(Number);
        graph[s].push(e);
        graph[e].push(s);
    }
    for (let i = 1; i <= N; i++) {
        graph[i].sort((a, b) => a - b);
    }
    const ch = new Array(N + 1).fill(0);
    let dfsStr = "";
    function DFS(curNode) {
        dfsStr += `${curNode} `;
        for (const next of graph[curNode]) {
            if (ch[next] === 1) continue;
            ch[next] = 1;
            DFS(next);
        }
    }
    ch[V] = 1;
    DFS(V);
    for (let i = 1; i <= N; i++) {
        graph[i].sort((a, b) => a - b);
    }
    ch.fill(0);
    const queue = [];
    ch[V] = 1;
    queue.push(V);
    let bfsStr = "";

    while (queue.length) {
        const curNode = queue.shift();
        bfsStr += `${curNode} `;
        for (const next of graph[curNode]) {
            if (ch[next] === 1) continue;
            ch[next] = 1;
            queue.push(next);
        }
    }
    console.log(dfsStr);
    console.log(bfsStr);
}

solution(param);
