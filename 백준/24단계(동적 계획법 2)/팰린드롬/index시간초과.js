var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").map(Number);
    const dp = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
    for (let len = 1; len <= numList.length; len++) {
        for (let i = 1; i <= N - len + 1; i++) {
            if (numList[i - 1] === numList[i + len - 1 - 1])
                dp[i][i + len - 1] = 1;
        }
    }
    let str = "";
    const M = Number(input[2]);
    for (let i = 3; i < 3 + M; i++) {
        let [S, E] = input[i].split(" ").map(Number);
        let flag = true;
        while (S <= E) {
            if (dp[S][E] === 1) {
                S++;
                E--;
            } else {
                flag = false;
                break;
            }
        }
        str += flag ? 1 + "\n" : 0 + "\n";
    }
    console.log(str);
}

solution(param);
