var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [s, e] = input[0].split(" ").map(Number);
    let answer = -1;
    const queue = [];
    const ch = new Array(100001).fill(0);
    const parent = new Array(100001).fill(-1);

    let queueIdx = 0;
    queue.push([s, 0]);
    ch[s] = 1;

    while (queueIdx < queue.length) {
        const [curNode, curDist] = queue[queueIdx++];
        if (curNode === e) {
            answer = curDist;
            break;
        }

        for (let next of [curNode * 2, curNode + 1, curNode - 1]) {
            if (next < 0 || next > 100000) continue;
            if (ch[next] === 1) continue;

            ch[next] = 1;
            parent[next] = curNode;
            queue.push([next, curDist + 1]);
        }
    }
    console.log(answer);
    let list = [];
    let num = e;
    while (true) {
        if (num === -1) break;
        list.push(num);
        num = parent[num];
    }
    console.log(list.reverse().join(" "));
}

solution(param);
