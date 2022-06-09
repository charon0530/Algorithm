var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const loadLenList = input[1].split(" ").map(BigInt);
    const costList = input[2].split(" ").map(BigInt);

    let result = 0n;
    let minCost = costList[0];
    for (let i = 0; i < N - 1; i++) {
        if (costList[i] < minCost) {
            minCost = costList[i];
        }
        result += minCost * loadLenList[i];
    }

    return String(result);
}

console.log(solution(param));
