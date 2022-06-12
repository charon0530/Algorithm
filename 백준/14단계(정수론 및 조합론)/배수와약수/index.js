var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");
function isFactor(a, b) {
    return b % a === 0;
}
function isMultiple(a, b) {
    return a % b === 0;
}

function solution(input) {
    let i = 0;
    let str = "";
    while (true) {
        const [A, B] = input[i++].split(" ").map((x) => Number(x));
        if (A === B && A === 0) break;

        if (isFactor(A, B)) str += "factor\n";
        else if (isMultiple(A, B)) str += "multiple\n";
        else str += "neither\n";
    }
    console.log(str);
}

solution(param);
