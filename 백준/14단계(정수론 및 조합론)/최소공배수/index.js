var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let str = "";
    for (let i = 1; i <= N; i++) {
        const [A, B] = input[i].split(" ").map((x) => Number(x));

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
        str += String(LCM) + "\n";
    }
    console.log(str);
}

solution(param);
