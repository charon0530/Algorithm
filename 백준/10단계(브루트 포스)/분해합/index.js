var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    if (N === 1) return 0;
    for (let i = 1; i <= N; i++) {
        let curVal = i;
        const curValStr = String(i);

        for (let j = 0; j < curValStr.length; j++) {
            curVal += Number(curValStr[j]);
        }
        if (curVal === N) return i;
    }
    return 0;
}

console.log(solution(param));
