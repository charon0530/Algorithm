var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    return input[0]
        .split(" ")
        .map((x) => Number(x))
        .reduce((acc, val) => acc + val, 0);
}

console.log(soltuion(param));
