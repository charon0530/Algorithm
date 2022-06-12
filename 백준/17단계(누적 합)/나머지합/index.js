var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const inputNumList = input[1].split(" ").map(Number);
    const numList = [];
    let answer = 0;
    for (let i = 0; i < N; i++) {
        numList.push(inputNumList[i]);
    }
    for (let i = 1; i < numList.length; i++) {
        numList[i] += numList[i - 1];
    }
    const restList = new Array(M).fill(0);
    for (let i = 0; i < numList.length; i++) {
        restList[numList[i] % M] += 1;
    }
    for (let i = 0; i < restList.length; i++) {
        const num = restList[i];
        //numC2
        if (num < 2) continue;
        answer += (num * (num - 1)) / 2;
        if (i === 0) {
            answer += num;
        }
    }
    console.log(answer);
}

solution(param);
