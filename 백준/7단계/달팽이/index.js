var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const [A, B, V] = input[0].split(" ").map((x) => Number(x));
    const gap = A - B;
    const target = V - A;
    const day = Math.ceil(target / gap);

    return day + 1;
}

console.log(soltuion(param));
