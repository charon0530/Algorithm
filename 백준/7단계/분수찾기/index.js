var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const X = Number(input[0]);
    let n = 0;
    while (n * (n + 1) < 2 * X) {
        n++;
    }
    n--;
    const rest = X - (n * (n + 1)) / 2 - 1;
    //n+1층에 존재
    // console.log(n);
    // console.log(rest);
    if ((n + 1) % 2 === 0) {
        return String(1 + rest) + "/" + String(n + 1 - rest);
    } else {
        return String(n + 1 - rest) + "/" + String(1 + rest);
    }
}

console.log(soltuion(param));
