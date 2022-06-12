var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").map(Number);
    const stack = [];
    const answer = new Array(numList.length).fill(-1);
    for (let i = 0; i < numList.length; i++) {
        if (stack.length === 0) {
            stack.push(i);
        } else {
            while (true) {
                if (stack.length === 0) break;
                if (numList[stack[stack.length - 1]] >= numList[i]) break;
                answer[stack.pop()] = numList[i];
            }
            stack.push(i);
        }
    }
    console.log(answer.join(" "));
}

solution(param);
