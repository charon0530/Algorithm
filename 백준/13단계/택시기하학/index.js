var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N] = input[0].split(" ").map((x) => Number(x));

    console.log(Math.PI * N * N);
    console.log(2 * N * N);
}

solution(param);
