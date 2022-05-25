var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin" or 0
    .toString()
    .split("\n");

function soltuion(input = ["", ""]) {
    const num = Number(input[0]);

    for (let i = 1; i <= num; i++) {
        let lineStr = "";
        lineStr += " ".repeat(num - i);
        lineStr += "*".repeat(i);
        console.log(lineStr);
    }
}

soltuion(param);
