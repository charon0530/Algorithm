var fs = require("fs");

var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const lineList = [];
    for (let i = 1; i <= N; i++) {
        const [A, B] = input[i].split(" ").map(Number);
        lineList.push([A, B]);
    }
    lineList.sort((a, b) => a[0] - b[0]);
    //console.log(lineList);
    const bList = lineList.map((x) => x[1]);
    //console.log(bList);

    const dp = new Array(bList.length).fill(1);
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (bList[j] < bList[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    //console.log(dp);
    console.log(N - Math.max(...dp));
}

solution(param);
