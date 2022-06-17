var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let lineNum = 1;
    const upList = [];
    const downList = [];
    for (let i = 0; i < N; i++) {
        const [s, e] = input[lineNum++].split(" ").map(Number);
        upList.push([s, e]);
    }
    for (let i = 0; i < M; i++) {
        const [s, e] = input[lineNum++].split(" ").map(Number);
        downList.push([s, e]);
    }
    const queue = [];
    const ch = new Array(101).fill(0);
    queue.push([1, 0]);
    ch[1] = 1;
    let queueIdx = 0;
    while (queueIdx < queue.length) {
        let [cur, times] = queue[queueIdx++];
        for (let i = 0; i < upList.length; i++) {
            if (upList[i][0] === cur) {
                cur = upList[i][1];
                ch[cur] = 1;
                break;
            }
        }
        for (let i = 0; i < downList.length; i++) {
            if (downList[i][0] === cur) {
                cur = downList[i][1];
                ch[cur] = 1;
                break;
            }
        }
        if (cur === 100) {
            console.log(times);
            return;
        }

        for (let i = 1; i <= 6; i++) {
            const next = cur + i;

            if (next > 100) continue;
            if (ch[next] === 1) continue;

            ch[next] = 1;
            queue.push([next, times + 1]);
        }
    }
}

solution(param);
