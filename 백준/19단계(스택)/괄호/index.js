var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let str = "";

    for (let i = 1; i <= N; i++) {
        const stack = [];
        const list = input[i].split("");
        for (let i = 0; i < list.length; i++) {
            if (list[i] === "(") stack.push("(");
            else {
                if (stack[stack.length - 1] === "(") {
                    stack.pop();
                } else {
                    stack.push(")");
                }
            }
        }
        str += (stack.length === 0 ? "YES" : "NO") + "\n";
    }
    console.log(str);
}

solution(param);
