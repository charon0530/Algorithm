var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M, Start] = input[0].split(" ").map(Number);

    const graph = Array.from({ length: N + 1 }, () => []);
    for (let i = 1; i <= M; i++) {
        const [s, e] = input[i].split(" ").map(Number);
        graph[s].push(e);
        graph[e].push(s);
    }
    for (let i = 1; i <= N; i++) {
        graph[i].sort((a, b) => a - b);
    }
    let times = 1;
    const ch = new Array(N + 1).fill(0);

    function DFS(curNode) {
        for (let i of graph[curNode]) {
            if (ch[i] !== 0) continue;
            ch[i] = times++;
            DFS(i);
        }
    }
    ch[Start] = times++;
    DFS(Start);
    let str = "";
    for (let i = 1; i <= N; i++) {
        str += ch[i] + "\n";
    }
    console.log(str);
}

solution(param);
