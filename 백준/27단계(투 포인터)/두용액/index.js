var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").slice(0, N).map(Number);
    numList.sort((a, b) => a - b);
    let lt = 0;
    let rt = numList.length - 1;
    let minVal = Number.MAX_SAFE_INTEGER;
    let minLt = lt;
    let minRt = rt;
    while (lt < rt) {
        const gap = numList[rt] + numList[lt];
        if (gap === 0) {
            console.log(numList[lt], numList[rt]);
            return;
        }
        if (Math.abs(gap) < Math.abs(minVal)) {
            minLt = lt;
            minRt = rt;
            minVal = gap;
        }
        if (gap > 0) {
            rt--;
        } else {
            lt++;
        }
    }
    console.log(numList[minLt], numList[minRt]);
}

solution(param);
