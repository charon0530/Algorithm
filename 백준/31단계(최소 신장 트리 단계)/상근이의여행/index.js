var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const T = Number(input[0]);
    let inputIdx = 1;
    let str = "";
    for (let i = 0; i < T; i++) {
        const [N, M] = input[inputIdx++].split(" ").map(Number);
        for (let j = 0; j < M; j++) {
            inputIdx++;
        }
        str += N - 1 + "\n";
    }
    console.log(str);
}

solution(param);
