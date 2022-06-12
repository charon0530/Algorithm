var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map((x) => Number(x));

    const a = new Set();
    const b = new Set();
    for (let i = 1; i <= N; i++) {
        const target = input[i];
        a.add(target);
    }
    for (let i = N + 1; i < N + 1 + M; i++) {
        const target = input[i];
        b.add(target);
    }
    const result = [...a].filter((x) => b.has(x));
    console.log(result.length);
    result.sort();
    console.log(result.join("\n"));
}

console.log(solution(param));
