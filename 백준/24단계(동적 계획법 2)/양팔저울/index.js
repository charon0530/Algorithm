var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const coinList = input[1].split(" ").map(Number);
    const M = Number(input[2]);
    const dp = Array.from({ length: N + 1 }, () => new Array(40001).fill(0));
    dp[0][0] = 1;

    for (let coinIdx = 0; coinIdx < coinList.length; coinIdx++) {
        const coinWeight = coinList[coinIdx];
        for (let weight = 0; weight <= 40000; weight++) {
            if (dp[coinIdx][weight] === 1) {
                dp[coinIdx + 1][weight] = 1;
                dp[coinIdx + 1][Math.abs(coinWeight - weight)] = 1;
                if (Math.abs(coinWeight + weight) <= 40000)
                    dp[coinIdx + 1][Math.abs(coinWeight + weight)] = 1;
            }
        }
    }
    //console.table(dp);

    const targetList = input[3].split(" ").map(Number);
    let str = "";
    for (let i = 0; i < M; i++) {
        const target = targetList[i];
        str += dp[N][target] === 1 ? "Y " : "N ";
    }
    console.log(str);
}

solution(param);
