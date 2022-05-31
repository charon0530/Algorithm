var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const sgSET = new Set(input[1].split(" ").map((x) => Number(x)));
    const M = Number(input[2]);
    const cardSET = new Set(input[3].split(" ").map((x) => Number(x)));

    let str = [];
    for (let val of cardSET) {
        if (sgSET.has(val)) str.push(1);
        else str.push(0);
    }
    console.log(str.join(" "));
}

console.log(solution(param));
