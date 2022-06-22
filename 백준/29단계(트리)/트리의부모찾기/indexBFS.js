var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const tree = Array.from({ length: N + 1 }, () => []);
    for (let i = 1; i < N; i++) {
        const [s, e] = input[i].split(" ").map(Number);
        tree[s].push(e);
        tree[e].push(s);
    }
    const parent = new Array(N + 1).fill(-1);

    const ch = new Array(N + 1).fill(0);

    const queue = [];
    let queueIdx = 0;
    queue.push(1);
    ch[1] = 1;
    while (queueIdx < queue.length) {
        const curNode = queue[queueIdx++];

        for (let next of tree[curNode]) {
            if (ch[next] === 1) continue;

            ch[next] = 1;
            parent[next] = curNode;
            queue.push(next);
        }
    }
    //console.table(parent);
    let str = "";
    for (let i = 2; i < parent.length; i++) {
        str += parent[i] + "\n";
    }
    console.log(str);
}

solution(param);
