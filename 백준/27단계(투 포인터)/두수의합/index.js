var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const n = Number(input[0]);
    const numList = input[1].split(" ").map(Number);
    const x = Number(input[2]);
    if (numList.length === 1) {
        console.log(0);
        return;
    }
    numList.sort((a, b) => a - b);
    let lt = 0;
    let rt = numList.length - 1;
    let answer = 0;
    while (lt < rt) {
        if (numList[lt] + numList[rt] === x) {
            answer++;
            rt--;
        } else if (numList[lt] + numList[rt] > x) {
            rt--;
        } else {
            lt++;
        }
    }
    console.log(answer);
}

solution(param);
