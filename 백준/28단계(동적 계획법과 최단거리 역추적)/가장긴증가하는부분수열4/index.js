var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").slice(0, N).map(Number);

    const dp = new Array(N).fill(1);
    const parent = new Array(N).fill(-1);
    for (let i = 1; i < numList.length; i++) {
        for (let j = 0; j < i; j++) {
            if (numList[j] < numList[i]) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    parent[i] = j;
                }
            }
        }
    }
    let maxVal = -1;
    let maxValIdx = -1;
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] > maxVal) {
            maxVal = dp[i];
            maxValIdx = i;
        }
    }
    console.log(maxVal);
    let result = [];

    while (maxValIdx !== -1) {
        result.push(numList[maxValIdx]);
        maxValIdx = parent[maxValIdx];
    }
    console.log(result.reverse().join(" "));
}

solution(param);
