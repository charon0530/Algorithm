var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    return input[0]
        .split("")
        .sort((a, b) => b - a)
        .join("");
}

console.log(solution(param));
