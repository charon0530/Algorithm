var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const [A, B, C] = input[0].split(" ").map((x) => Number(x));

    if (B >= C) return -1;

    return parseInt(A / (C - B)) === A / (C - B)
        ? A / (C - B) + 1
        : Math.ceil(A / (C - B));
}

console.log(soltuion(param));
