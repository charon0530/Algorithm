var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const V = Number(input[0]);
    const tree = Array.from({ length: V + 1 }, () => []);
    for (let i = 1; i <= V; i++) {
        const lineList = input[i].split(" ").map(Number);
        for (let i = 1; i < lineList.length; i = i + 2) {
            if (lineList[i] === -1) break;
            tree[lineList[0]].push([lineList[i], lineList[i + 1]]);
            tree[lineList[i]].push([lineList[0], lineList[i + 1]]);
        }
    }
    let answer = 0;

    let farNode = -1;

    const ch = new Array(V + 1).fill(0);
    function DFS(curNode, sum) {
        if (answer < sum) {
            farNode = curNode;
            answer = sum;
        }
        for (const [next, dist] of tree[curNode]) {
            if (ch[next] === 1) continue;

            ch[next] = 1;
            DFS(next, sum + dist);
        }
    }
    ch[1] = 1;
    DFS(1, 0);

    answer = 0;
    ch.fill(0);

    ch[farNode] = 1;
    DFS(farNode, 0);
    console.log(answer);
}

solution(param);
