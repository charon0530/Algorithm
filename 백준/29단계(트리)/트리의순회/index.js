var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const inOrder = input[1].split(" ").map(Number);
    const postOrder = input[2].split(" ").map(Number);

    const nodeCountList = new Array(N + 1).fill(0);
    for (let i = 0; i < inOrder.length; i++) {
        nodeCountList[inOrder[i]] = i; //자신의 왼쪽에 있는 노드 수
    }
    console.log(nodeCountList);

    let str = "";
    function preOrder(inStart, inEnd, postStart, postEnd) {
        if (inStart > inEnd || postStart > postEnd) return;

        const root = postOrder[postEnd];
        str += root + " ";
        const leftNodeCount = nodeCountList[root] - inStart;
        const rightNodeCount = inEnd + 1 - nodeCountList[root] - 1;

        preOrder(
            inStart,
            inStart + leftNodeCount - 1,
            postStart,
            postStart + leftNodeCount - 1
        );
        preOrder(
            inEnd - rightNodeCount + 1,
            inEnd,
            postEnd - 1 - rightNodeCount + 1,
            postEnd - 1
        );
    }
    preOrder(0, N - 1, 0, N - 1);
    console.log(str);
}

solution(param);
