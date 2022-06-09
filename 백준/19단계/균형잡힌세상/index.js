var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let i = 0;

    while (true) {
        const curLine = input[i++];
        const stack = [];
        if (curLine === ".") break;
        for (let i = 0; i < curLine.length; i++) {
            if (curLine[i] === "[") {
                stack.push("[");
            } else if (curLine[i] === "]") {
                if (stack[stack.length - 1] === "[") stack.pop();
                else stack.push("]");
            } else if (curLine[i] === "(") {
                stack.push("(");
            } else if (curLine[i] === ")") {
                if (stack[stack.length - 1] === "(") stack.pop();
                else stack.push(")");
            }
        }
        console.log(stack.length === 0 ? "yes" : "no");
    }
}

solution(param);
