var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const num = Number(input[0]);
    const lineNum = Number(input[1]);
    const graph = Array.from({ length: num + 1 }, () => []);
    for (let i = 2; i < lineNum + 2; i++) {
        const [s, e] = input[i].split(" ").map(Number);
        graph[s].push(e);
        graph[e].push(s);
    }
    const ch = new Array(num + 1).fill(0);
    function DFS(curNode) {
        for (const next of graph[curNode]) {
            if (ch[next] !== 0) continue;
            ch[next] = 1;
            DFS(next);
        }
    }
    DFS(1);
    console.log(ch.filter((x) => x > 0).length - 1);
}

solution(param);
