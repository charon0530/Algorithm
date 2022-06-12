var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const inputNumList = input[1].split(" ").map(Number);
    const numList = [];
    for (let i = 0; i < N; i++) {
        numList.push(inputNumList[i]);
    }
    for (let i = 1; i < numList.length; i++) {
        numList[i] = numList[i - 1] + numList[i];
    }
    //console.log(numList);
    let result = Number.MIN_SAFE_INTEGER;
    for (let i = 0 + M - 1; i < numList.length; i++) {
        const endIdx = i;
        const startIdx = i - (M - 1);

        let tempSum =
            startIdx - 1 >= 0
                ? numList[endIdx] - numList[startIdx - 1]
                : numList[endIdx];
        result = Math.max(result, tempSum);
    }
    console.log(result);
}

solution(param);
