var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const stack = [];
    let str = "";

    for (let i = 1; i <= N; i++) {
        const num = Number(input[i]);
        if (num === 0) {
            stack.pop();
        } else {
            stack.push(num);
        }
    }
    console.log(stack.reduce((acc, val) => acc + val, 0));
}

solution(param);
