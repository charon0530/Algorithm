var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const numList = input[0].split(/[-+]/g).map(Number);
    const opList = input[0].split(/[^-+]/g).filter((x) => x);

    //console.log(numList);
    //console.log(opList);
    const minusIdx = opList.indexOf("-");
    if (minusIdx === -1) return numList.reduce((acc, val) => acc + val, 0);

    let positiveSum = 0;
    let negativeSum = 0;

    for (let i = 0; i <= minusIdx; i++) {
        positiveSum += numList[i];
    }
    for (let i = minusIdx + 1; i < numList.length; i++) {
        negativeSum += numList[i];
    }
    return positiveSum - negativeSum;
}

console.log(solution(param));
