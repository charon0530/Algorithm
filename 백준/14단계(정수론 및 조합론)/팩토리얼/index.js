var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let sum = 1n;
    for (let i = 1; i <= N; i++) {
        sum *= BigInt(i);
    }
    // let result = String(sum).split(/[^0]/g);
    // console.log(result[result.length - 1].length);
    const str = String(sum);

    let count = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "0") count++;
        else break;
    }
    console.log(count);
}

solution(param);
