var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map((x) => Number(x));
    const numToName = {};
    const nameToNum = {};
    for (let i = 1; i <= N; i++) {
        const target = input[i];
        nameToNum[target] = i;
        numToName[i] = target;
    }
    let str = "";
    for (let i = N + 1; i < N + 1 + M; i++) {
        const target = input[i];
        if (!isNaN(Number(target))) str += numToName[target] + "\n";
        else str += nameToNum[target] + "\n";
    }
    console.log(str);
}

solution(param);
