var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const list = [];
    input = input[1].split(" ");
    for (let i = 0; i < N; i++) {
        list.push(Number(input[i]));
    }
    list.sort((a, b) => a - b);
    console.log(list[0] * list[list.length - 1]);
}

solution(param);
