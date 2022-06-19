var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const edges = [];
    for (let i = 1; i <= M; i++) {
        edges.push(input[i].split(" ").map(Number));
    }
    const dist = new Array(N + 1).fill(Number.MAX_SAFE_INTEGER);
    dist[1] = 0;
    for (let i = 0; i < N - 1; i++) {
        for (let edge of edges) {
            const [s, e, c] = edge;
            if (dist[s] === Number.MAX_SAFE_INTEGER) continue;

            if (dist[s] + c < dist[e]) {
                dist[e] = dist[s] + c;
            }
        }
    }
    for (let edge of edges) {
        const [s, e, c] = edge;
        if (dist[s] === Number.MAX_SAFE_INTEGER) continue;

        if (dist[s] + c < dist[e]) {
            console.log(-1);
            return;
        }
    }

    let str = "";
    for (let i = 2; i < dist.length; i++) {
        str += dist[i] !== Number.MAX_SAFE_INTEGER ? dist[i] + "\n" : -1 + "\n";
    }
    console.log(str);
}

solution(param);
