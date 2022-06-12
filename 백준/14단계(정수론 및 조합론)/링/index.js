var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function GCD(a, b) {
    if (a < b) [a, b] = [b, a];
    while (true) {
        if (a % b === 0) return b;

        const rest = a % b;
        a = b;
        b = rest;
    }
}
function solution(input) {
    const N = Number(input[0]);

    const ringList = input[1]
        .split(" ")
        .map((x) => Number(x))
        .slice(0, N);

    let str = "";
    const circleLen = ringList[0] * 2;
    for (let i = 1; i < ringList.length; i++) {
        const up = circleLen;
        const down = ringList[i] * 2;

        const gcd = GCD(up, down);

        str += String(up / gcd) + "/" + String(down / gcd) + "\n";
    }
    console.log(str);
}

solution(param);
