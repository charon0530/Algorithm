var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = [];
    const strList = input[1].split(" ");
    for (let i = 0; i < N; i++) {
        numList.push(Number(strList[i]));
    }
    //console.log(numList);

    const dp = new Array(N).fill(1);

    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (numList[i] > numList[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(dp);
    console.log(Math.max(...dp));
}

solution(param);
