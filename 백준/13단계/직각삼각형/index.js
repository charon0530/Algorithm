var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let i = 0;
    let result = "";
    while (true) {
        const list = input[i++].split(" ").map((x) => Number(x));
        list.sort((a, b) => a - b);

        const [a, b, c] = list;
        if (a === 0 && b === 0 && c === 0) break;

        if (c * c === a * a + b * b) result += "right\n";
        else result += "wrong\n";
    }
    console.log(result);
}

solution(param);
