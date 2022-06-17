var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M, Start] = input[0].split(" ").map(Number);
    if (N === M && N === 1) {
        console.log(1);
        return;
    }
    const graph = new Array(N);
    for (let i = 1; i <= N; i++) {
        graph[i - 1] = input[i].split("").map(Number);
    }
    console.table(graph);
    const ch = graph.map((line) =>
        line.slice().map((x) => new Array(2).fill(0))
    );
    let queue = [];

    ch[0][0][0] = 1;
    queue.push([0, 0, 1, 1]); //row,col,canBreak,dist

    let queueIdx = 0;
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    while (queueIdx < queue.length) {
        const [curR, curC, curCanBreak, curDist] = queue[queueIdx++];

        if (curR === N - 1 && curC === M - 1) {
            console.log(curDist);
            return;
        }
        for (let i = 0; i < 4; i++) {
            const nR = curR + dr[i];
            const nC = curC + dc[i];

            if (nR < 0 || nR >= N || nC < 0 || nC >= M) continue;
            //if (ch[nR][nC] === 1) continue;

            if (graph[nR][nC] === 1) {
                if (curCanBreak === 1) {
                    if (ch[nR][nC][1] === 0) {
                        ch[nR][nC][1] = 1;
                        queue.push([nR, nC, 0, curDist + 1]);
                    }
                }
            } else {
                if (ch[nR][nC][curCanBreak] === 1) {
                    continue;
                } else {
                    ch[nR][nC][curCanBreak] = 1;
                    queue.push([nR, nC, curCanBreak, curDist + 1]);
                }
            }
        }
    }
    console.log(-1);
}

solution(param);
