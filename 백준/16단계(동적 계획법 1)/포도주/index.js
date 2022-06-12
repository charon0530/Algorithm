var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let answer = 0;
    const numList = [];
    for (let i = 1; i <= N; i++) {
        numList.push(Number(input[i]));
    }

    if (N === 1) {
        console.log(numList[0]);
        return;
    }
    if (N === 2) {
        console.log(numList[0] + numList[1]);
        return;
    }
    //dp[n번째잔마심][0=안마심, 01= 직전마심 , 10(2) = 두번째전마심, 11(3) = 다마심]
    const dp = Array.from({ length: N }, () => new Array(4).fill(0));
    dp[0][0] = numList[0];
    dp[0][1] = numList[0];
    dp[0][2] = numList[0];
    //dp[0][3] = numList[0];

    dp[1][0] = numList[1];
    dp[1][1] = numList[0] + numList[1];
    dp[1][2] = numList[1];

    for (let i = 2; i < N; i++) {
        let tempMax = 0;
        for (let row = 0; row < i - 2; row++) {
            tempMax = Math.max(tempMax, dp[row][0], dp[row][1], dp[row][2]);
        }
        dp[i][0] = tempMax + numList[i];
        dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][2]) + numList[i];
        dp[i][2] =
            Math.max(dp[i - 2][0], dp[i - 2][1], dp[i - 2][2]) + numList[i];
    }

    for (let i = 0; i < N; i++) {
        for (let j = 0; j <= 2; j++) {
            answer = Math.max(answer, dp[i][j]);
        }
    }
    console.table(dp);
    console.log(answer);
}

solution(param);
