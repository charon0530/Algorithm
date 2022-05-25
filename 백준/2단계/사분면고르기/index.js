var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const x = input[0];
    const y = input[1];

    if (x * y > 0) {
        if (x > 0) return 1;
        else return 3;
    } else {
        if (x > 0) return 4;
        else return 2;
    }
}

console.log(soltuion(param));
