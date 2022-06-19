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
    const ch = new Array(100001).fill(0);
    const queue = [];
    ch[N] = 1;
    queue.push([N, 0]);

    while (queue.length) {
        const [cur, curDist] = queue.shift();
        if (cur === K) {
            console.log(curDist);
            return;
        }

        for (let [next, dist] of [
            [cur * 2, 0],
            [cur - 1, 1],
            [cur + 1, 1],
        ]) {
            if (next > 100000 || next < 0) continue;
            if (ch[next] === 1) continue;
            ch[next] = 1;

            if (next === cur * 2) {
                queue.unshift([next, curDist + dist]);
            } else {
                queue.push([next, curDist + dist]);
            }
        }
    }
}

solution(param);
