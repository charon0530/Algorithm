var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const stack = [0];
    let iNum = 1;
    let str = "";

    for (let i = 1; i <= N; i++) {
        const num = Number(input[i]);
        let lastNum = stack[stack.length - 1];

        if (lastNum > num) {
            str = "NO";
            break;
        }
        while (true) {
            if (stack[stack.length - 1] === num) break;
            stack.push(iNum++);
            str += "+\n";
        }
        stack.pop();
        str += "-\n";
    }
    console.log(str);
}

solution(param);
