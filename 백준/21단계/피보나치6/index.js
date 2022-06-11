var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    if (N === 1) return 1;
    if (N === 2) return 1;
    let temp1 = 1n;
    let temp2 = 1n;

    for (let i = 3; i <= N; i++) {
        let temp =
            ((temp1 % 1000000007n) + (temp2 % 1000000007n)) % 1000000007n;
        temp1 = temp2 % 1000000007n;
        temp2 = temp % 1000000007n;
    }
    console.log(String(temp2));
}

solution(param);
