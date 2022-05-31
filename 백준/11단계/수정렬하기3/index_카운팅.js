//nodejs로는 불가

var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const arr = new Array(10001).fill(0);
    for (let i = 1; i <= N; i++) {
        const num = Number(input[i]);
        arr[num]++;
    }
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) continue;
        for (let j = 0; j < arr[i]; j++) {
            str += String(arr[i]) + "\n";
        }
    }
    console.log(str);
}

solution(param);
