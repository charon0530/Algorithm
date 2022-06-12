var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let str = "";
    for (let i = 1; i <= N; i++) {
        let [N, M] = input[i].split(" ").map(Number);

        let up = 1n;
        let down = 1n;

        for (let j = 0; j < N; j++) {
            up *= BigInt(M);
            M = BigInt(M) - 1n;
        }
        for (let j = N; j >= 1; j--) {
            down *= BigInt(j);
        }
        str += String(up / down) + "\n";
    }
    console.log(str);
}

solution(param);
