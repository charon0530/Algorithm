var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, S] = input[0].split(" ").map(Number);
    const numList = input[1].split(" ").map(Number);

    let answer = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    let lt = 0;
    for (let rt = 0; rt < numList.length; rt++) {
        sum += numList[rt];
        while (sum >= S) {
            answer = Math.min(answer, rt - lt + 1);
            sum -= numList[lt];
            lt++;
        }
    }
    console.log(answer === Number.MAX_SAFE_INTEGER ? 0 : answer);
}

solution(param);
