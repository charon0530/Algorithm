var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let codeOneNum = 0;
    let codeTwoNum = 0;
    function fib(n) {
        if (n === 1 || n === 2) {
            codeOneNum++;
            return 1;
        } else return fib(n - 1) + fib(n - 2);
    }

    function fibonacci(n) {
        dp = new Array(n).fill(0);
        dp[1] = dp[2] = 1;

        for (let i = 3; i <= N; i++) {
            codeTwoNum++;
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
    fib(N);
    fibonacci(N);
    console.log(codeOneNum);
    console.log(codeTwoNum);
}

solution(param);
