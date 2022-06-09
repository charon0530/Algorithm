var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").map(Number);
    const list = [];
    for (let i = 0; i < N; i++) {
        list.push(numList[i]);
    }

    list.sort((a, b) => a - b);
    for (let i = 1; i < list.length; i++) {
        list[i] += list[i - 1];
    }
    console.log(list.reduce((acc, val) => acc + val, 0));
}

solution(param);
