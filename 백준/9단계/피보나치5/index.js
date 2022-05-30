var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const N = Number(input[0]);

    function foo(num, total) {
        if (num <= 1) return total;
        return foo(num - 1, total * num);
    }
    return foo(N, 1);
}

console.log(soltuion(param));
