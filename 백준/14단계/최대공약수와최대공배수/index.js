var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [A, B] = input[0].split(" ").map((x) => Number(x));

    let GCD = null;
    let tempA = A;
    let tempB = B;

    while (true) {
        if (tempA % tempB === 0) {
            GCD = tempB;
            break;
        }
        const rest = tempA % tempB;
        tempA = tempB;
        tempB = rest;
    }
    let LCM = (A * B) / GCD;

    console.log(GCD);
    console.log(LCM);
}

solution(param);
