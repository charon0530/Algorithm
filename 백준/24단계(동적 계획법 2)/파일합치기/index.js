var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let lineIdx = 1;
    let str = "";
    for (let i = 0; i < N; i++) {
        const M = Number(input[lineIdx++]);
        const numList = input[lineIdx++].split(" ").splice(0, M).map(Number);
        const accList = [...numList];
        for (let j = 1; j < numList.length; j++) {
            accList[j] += accList[j - 1];
        }
        accList.unshift(0);
        const dp = Array.from({ length: M + 1 }, () =>
            new Array(M + 1).fill(0)
        );
        for (let len = 2; len <= M; len++) {
            for (let s = 1; s <= M - len + 1; s++) {
                let min = Number.MAX_SAFE_INTEGER;
                for (let k = 0; k <= len - 2; k++) {
                    min = Math.min(
                        dp[s][s + k] + dp[s + k + 1][s + len - 1],
                        min
                    );
                }
                dp[s][s + len - 1] =
                    min + accList[s + len - 1] - accList[s - 1];
            }
        }
        str += dp[1][M] + "\n";
    }
    console.log(str);
}

solution(param);
