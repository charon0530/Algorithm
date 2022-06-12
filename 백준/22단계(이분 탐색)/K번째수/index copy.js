var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const K = Number(input[1]);
    function isPossible(num) {
        let count = 0;
        for (let i = 1; i <= N; i++) {
            count += Math.min(N, Math.floor(num / i));
        }
        return count <= K;
    }
    let lt = 1;
    let rt = N * N;
    let answer = 0;
    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);
        if (isPossible(mid)) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    console.log(answer);
}

solution(param);
