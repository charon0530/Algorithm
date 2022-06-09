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

        if (lastNum === num) {
            stack.pop();
            str += "-\n";
        } else if (lastNum < num) {
            if (iNum > num) {
                str = "NO";
                break;
            }
            while (true) {
                stack.push(iNum++);
                str += "+\n";
                if (stack[stack.length - 1] === num) break;
            }
            stack.pop();
            str += "-\n";
        } else {
            str = "NO";
            break;
        }
    }
    console.log(str);
}

solution(param);
