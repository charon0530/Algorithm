var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const n = Number(input[0]);
    const m = Number(input[1]);
    let lineIdx = 2;
    const dist = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    );
    for (let i = 1; i <= n; i++) {
        dist[i][i] = 0;
    }
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
    //console.table(dist);
    let str = "";
    for (let row = 1; row < dist.length; row++) {
        for (let col = 1; col < dist[0].length; col++) {
            if (dist[row][col] === Number.MAX_SAFE_INTEGER) {
                str += 0 + " ";
            } else {
                str += dist[row][col] + " ";
            }
        }
        str += "\n";
    }
    console.log(str);
}

solution(param);
