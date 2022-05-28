var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const [A, B] = input[0].split(" ");

    console.log((BigInt(A) + BigInt(B)).toString());
}

soltuion(param);
