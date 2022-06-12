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
    for (let i = 0; i < numList.length; i++) {
        for (let j = i; j < numList.length; j++) {
            const temp = i - 1 >= 0 ? numList[j] - numList[i - 1] : numList[j];
            if (temp % M === 0) answer++;
        }
    }
    console.log(answer);
}

solution(param);
