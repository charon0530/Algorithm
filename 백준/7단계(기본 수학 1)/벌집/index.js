var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const A = Number(input[0]);
    let n = 1;
    let nIncGap = 0;
    let lastVal = 1;
    while (true) {
        if (A <= lastVal) return n;
        n++;
        nIncGap = 6 * (n - 1);
        lastVal += nIncGap;
    }
}

console.log(soltuion(param));
