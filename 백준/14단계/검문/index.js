var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");
function GCD(a, b) {
    if (b > a) [a, b] = [b, a];
    while (true) {
        if (a % b === 0) {
            return b;
        }
        const rest = a % b;
        a = b;
        b = rest;
    }
}
function solution(input) {
    const N = Number(input[0]);
    const inputList = [];
    for (let i = 1; i <= N; i++) {
        inputList.push(Number(input[i]));
    }
    inputList.sort((a, b) => a - b);
    let str = "";
    let list = [];
    for (let i = 1; i < N; i++) {
        list.push(Number(inputList[i]) - Number(inputList[i - 1]));
    }

    let gcdVal = list[0];
    for (let i = 1; i < list.length; i++) {
        gcdVal = GCD(gcdVal, list[i]);
    }
    //console.log(gcdVal);
    const result = [];
    for (let i = 2; i * i <= gcdVal; i++) {
        if (gcdVal % i === 0) {
            if (i * i === gcdVal) result.push(i);
            else {
                result.push(i);
                result.push(gcdVal / i);
            }
        }
    }
    result.push(gcdVal);
    result.sort((a, b) => a - b);

    console.log(result.join(" "));
}

solution(param);
