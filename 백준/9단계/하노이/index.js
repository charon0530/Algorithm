var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let answer = [];

    function H(start, temp, end, num) {
        if (num === 1) {
            answer.push(start + " " + end);
        } else {
            H(start, end, temp, num - 1);
            answer.push(start + " " + end);
            H(temp, start, end, num - 1);
        }
    }

    H(1, 2, 3, N);
    console.log(answer.length);
    let str = "";
    for (let i = 0; i < answer.length; i++) {
        str += answer[i] + "\n";
    }
    console.log(str);
}

solution(param);
