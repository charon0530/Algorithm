var fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(list) {
    let lineIdx = 0;
    let str = "";
    while (true) {
        let [N, K] = list[lineIdx++].split(" ").map((x) => Number(x));
        K = parseInt(K * 100 + 0.5);
        if (N === 0 && K === 0) break;
        const dp = new Array(K + 1).fill(0);

        const candyList = [];
        for (let count = 0; count < N; count++) {
            const [V, W] = list[lineIdx++].split(" ").map((x) => Number(x));
            candyList.push([V, parseInt(W * 100 + 0.5)]);
        }
        // for (let i = 0; i <= K; i++) {
        //     for (let j = 0; j < candyList.length; j++) {
        //         const [V, W] = candyList[j];
        //         if (i - W >= 0) {
        //             dp[i] = Math.max(dp[i], dp[i - W] + V);
        //         }
        //     }
        // }
        for (let i = 0; i < candyList.length; i++) {
            const [V, W] = candyList[i];
            for (let j = W; j < dp.length; j++) {
                dp[j] = Math.max(dp[j], dp[j - W] + V);
            }
        }
        // 둘 다 맞긴 함
        // BUT 후자가 더 빠름 Why? 반복문을 줄일 수 있음
        str += String(dp[K]) + "\n";
    }

    console.log(str);
}

solution(input);
