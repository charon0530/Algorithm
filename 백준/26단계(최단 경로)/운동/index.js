var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [n, m] = input[0].split(" ").map(Number);
    let lineIdx = 1;
    const dist = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    );

    for (let i = 0; i < m; i++) {
        const [a, b, c] = input[lineIdx++].split(" ").map(Number);
        dist[a][b] = Math.min(dist[a][b], c);
    }

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                dist[i][j] = Math.min(dist[i][k] + dist[k][j], dist[i][j]);
            }
        }
    }
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {
        min = Math.min(min, dist[i][i]);
    }
    console.log(min === Number.MAX_SAFE_INTEGER ? -1 : min);
}

solution(param);
