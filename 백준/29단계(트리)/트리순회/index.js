var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const tree = {};
    for (let i = 1; i <= N; i++) {
        const [p, lc, rc] = input[i].split(" ");
        tree[p] = {};
        tree[p].lc = lc;
        tree[p].rc = rc;
    }
    //console.log(tree);

    let pre = "";
    let inOrder = "";
    let post = "";
    function DFS(curNode) {
        if (curNode === ".") return;
        else {
            const lc = tree[curNode].lc;
            const rc = tree[curNode].rc;

            pre += curNode;
            DFS(lc);
            inOrder += curNode;
            DFS(rc);
            post += curNode;
        }
    }
    DFS("A");
    console.log(pre);
    console.log(inOrder);
    console.log(post);
}

solution(param);
