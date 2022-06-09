var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const stack = [];
    let str = "";

    for (let i = 1; i <= N; i++) {
        let [cmd, val] = input[i].split(" ");
        val = Number(val);

        if (cmd === "push") {
            stack.push(val);
        } else if (cmd === "pop") {
            if (stack.length === 0) str += "-1\n";
            else str += String(stack.pop()) + "\n";
        } else if (cmd === "size") {
            str += String(stack.length) + "\n";
        } else if (cmd === "empty") {
            const result = stack.length === 0 ? 1 : 0;
            str += String(result) + "\n";
        } else if (cmd === "top") {
            if (stack.length === 0) str += "-1\n";
            else str += String(stack[stack.length - 1]) + "\n";
        }
    }
    console.log(str);
}

solution(param);
