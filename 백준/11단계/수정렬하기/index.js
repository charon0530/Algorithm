var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const list = [];
    for (let i = 1; i <= N; i++) {
        list.push(Number(input[i]));
    }
    list.sort((a, b) => a - b);
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += list[i] + "\n";
    }
    console.log(str);
}

solution(param);
