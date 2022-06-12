var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").map(Number);
    const stack = [];
    const answer = [];
    for (let i = numList.length - 1; i >= 0; i--) {
        const target = numList[i];

        while (true) {
            if (stack.length === 0) break;
            if (stack[stack.length - 1] > target) break;
            stack.pop();
        }

        if (stack.length === 0) {
            answer.push(-1);
            stack.push(target);
        } else {
            answer.push(stack[stack.length - 1]);
            stack.push(target);
        }
    }
    console.log(answer.reverse().join(" "));
}

solution(param);
