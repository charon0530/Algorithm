var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let [N, K] = input[0].split(" ").map(Number);
    let up = 1;
    let down = 1;
    for (let i = 0; i < K; i++) {
        up *= N--;
    }
    for (let i = K; i >= 1; i--) {
        down *= i;
    }
    console.log(up / down);
}

solution(param);
