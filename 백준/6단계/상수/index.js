var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    let [A, B] = String(input[0]).split(" ");
    A = Number(A.split("").reverse().join(""));
    B = Number(B.split("").reverse().join(""));

    return A > B ? A : B;
}

console.log(soltuion(param));
