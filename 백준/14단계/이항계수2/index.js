var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let [N, K] = input[0].split(" ").map(Number);

    const arr = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(1));

    for (let i = 1; i <= N; i++) {
        for (let j = 0; j <= i; j++) {
            if (i === j) arr[i][j] = 1;
            else if (j === 0) arr[i][j] = 1;
            else arr[i][j] = (arr[i - 1][j - 1] + arr[i - 1][j]) % 10007;
        }
    }
    console.log(arr[N][K]);
}

solution(param);
