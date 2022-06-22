var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const n = Number(input[0]);
    if (n === 1) {
        console.log(0);
        return;
    }
    const tree = Array.from({ length: n + 1 }, () => []);
    for (let i = 1; i <= n - 1; i++) {
        const [s, e, c] = input[i].split(" ").map(Number);
        tree[s].push([e, c]);
        tree[e].push([s, c]);
    }
    let answer = 0;
    let farNode = -1;
    const ch = new Array(n + 1).fill(0);
    function DFS(curNode, sum) {
        if (answer < sum) {
            answer = sum;
            farNode = curNode;
        }
        for (const [next, dist] of tree[curNode]) {
            if (ch[next] === 1) continue;
            ch[next] = 1;
            DFS(next, sum + dist);
        }
    }

    ch[1] = 1;
    DFS(1, 0);

    ch.fill(0);

    ch[farNode] = 1;
    DFS(farNode, 0);

    console.log(answer);
}

solution(param);
