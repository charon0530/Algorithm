var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const str1 = input[0];
    const str2 = input[1];
    const dp = Array.from({ length: str1.length + 1 }, () =>
        new Array(str2.length + 1).fill(0)
    );
    const resultDp = Array.from({ length: str1.length + 1 }, () =>
        new Array(str2.length + 1).fill("")
    );

    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                dp[i + 1][j + 1] = dp[i][j] + 1;
                resultDp[i + 1][j + 1] = resultDp[i][j] + str1[i];
            } else {
                //dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
                if (dp[i][j + 1] >= dp[i + 1][j]) {
                    dp[i + 1][j + 1] = dp[i][j + 1];
                    resultDp[i + 1][j + 1] = resultDp[i][j + 1];
                } else {
                    dp[i + 1][j + 1] = dp[i + 1][j];
                    resultDp[i + 1][j + 1] = resultDp[i + 1][j];
                }
            }
        }
    }

    console.log(dp[str1.length][str2.length]);
    console.log(resultDp[str1.length][str2.length]);
}

solution(param);
