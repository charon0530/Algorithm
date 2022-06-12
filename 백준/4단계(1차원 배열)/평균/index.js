var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const N = Number(input[0]);
    const scores = input[1].split(" ").map((x) => Number(x));
    const max = Math.max(...scores);
    let sum = 0;
    for (let i = 0; i < N; i++) {
        sum += (scores[i] / max) * 100;
    }
    return sum / scores.length;
}

console.log(soltuion(param));
