var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    return String(input[0])
        .split(" ")
        .filter((x) => x).length;
}

console.log(soltuion(param));
