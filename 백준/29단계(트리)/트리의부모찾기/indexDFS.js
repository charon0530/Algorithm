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

    function DFS(curNode, parentNode) {
        for (const next of tree[curNode]) {
            if (next === parentNode) continue;

            parent[next] = curNode;
            DFS(next, curNode);
        }
    }
    DFS(1, -1);
    //console.table(parent);
    let str = "";
    for (let i = 2; i < parent.length; i++) {
        str += parent[i] + "\n";
    }
    console.log(str);
}

solution(param);
