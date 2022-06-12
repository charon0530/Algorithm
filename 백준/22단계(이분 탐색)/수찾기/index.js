var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number).slice(0, N);
    const M = Number(input[2]);
    const B = input[3].split(" ").map(Number).slice(0, M);

    const AObj = A.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    let str = "";
    for (let val of B) {
        if (AObj[val] === undefined) {
            str += 0 + "\n";
        } else str += 1 + "\n";
    }
    console.log(str);
}

solution(param);
