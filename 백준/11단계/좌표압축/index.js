var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = [...new Set(input[1].split(" "))].map((x) => Number(x));
    numList.sort((a, b) => a - b);

    const dict = numList.reduce((acc, val, idx) => {
        acc[val] = idx;
        return acc;
    }, {});
    let str = "";
    let inputStr = input[1].split(" ").map((x) => Number(x));
    for (let i = 0; i < inputStr.length; i++) {
        str += dict[inputStr[i]] + " ";
    }
    console.log(str);
}

console.log(solution(param));
