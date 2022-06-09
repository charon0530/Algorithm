var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const loadLenList = input[1].split(" ").map(BigInt);
    let answer = 0n;
    let curNode = N - 1;
    const costList = input[2]
        .split(" ")
        .map(BigInt)
        .map((val, idx) => [val, idx]);

    costList.sort((a, b) => {
        if (a[0] === b[0]) {
            if (a[1] < b[1]) {
                return -1;
            } else return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return 1;
        }
    });

    console.log(costList);

    for (let i = 0; i < costList.length; i++) {
        const [cost, node] = costList[i];

        if (node >= curNode) continue;

        let subSum = 0n;
        for (let j = node; j < curNode; j++) {
            subSum += loadLenList[j];
        }
        answer += subSum * cost;
        curNode = node;
        if (node === 0) break;
    }
    return String(answer);
}

console.log(solution(param));
