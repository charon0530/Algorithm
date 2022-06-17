var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, K] = input[0].split(" ").map(Number);
    if (N === K) {
        console.log(0);
        return;
    }
    const ch = [];
    const queue = [];
    ch[N] = 1;
    queue.push([N, 0]);
    let queueIdx = 0;
    while (queueIdx < queue.length) {
        const [cur, times] = queue[queueIdx++];

        for (let next of [cur - 1, cur + 1, cur * 2]) {
            if (ch[next] === 1) continue;
            if (next > 100000) continue;
            if (next < 0) continue;
            if (next === K) {
                console.log(times + 1);
                return;
            }
            ch[next] = 1;
            queue.push([next, times + 1]);
        }
    }
}

solution(param);
