var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const loadLenList = input[1].split(" ").map(BigInt);
    let answer = 0n;

    const costList = input[2].split(" ").map(BigInt);
    let curNode = 0;
    while (true) {
        if (costList[curNode] >= costList[curNode + 1]) {
            answer += costList[curNode] * loadLenList[curNode];
            curNode = curNode + 1;
        } else {
            let subSum = 0n;
            let i = curNode + 1;
            for (; i <= N - 1; i++) {
                subSum += loadLenList[i - 1];
                if (costList[curNode] >= costList[i]) break;
            }
            answer += subSum * costList[curNode];
            curNode = i;
        }

        if (curNode === N - 1 || curNode === N) break;
    }
    return String(answer);
}

console.log(solution(param));
