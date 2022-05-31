var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map((x) => Number(x));
    const S = new Set();

    for (let i = 1; i <= N; i++) {
        S.add(input[i]);
    }
    let count = 0;
    for (let i = N + 1; i < N + 1 + M; i++) {
        if (S.has(input[i])) count++;
    }

    return count;
}

console.log(solution(param));
