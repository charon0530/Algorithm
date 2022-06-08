var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = [];
    const strList = input[1].split(" ");
    for (let i = 0; i < N; i++) {
        numList.push(Number(strList[i]));
    }
    //console.log(numList);

    const dp1 = new Array(N).fill(0);
    for (let i = 1; i < N; i++) {
        for (let j = 0; j < i; j++) {
            if (numList[j] < numList[i]) {
                dp1[i] = Math.max(dp1[i], dp1[j] + 1);
            }
        }
    }

    const dp2 = new Array(N).fill(0);
    for (let i = N - 2; i >= 0; i--) {
        for (let j = N - 1; j > i; j--) {
            if (numList[i] > numList[j]) {
                dp2[i] = Math.max(dp2[i], dp2[j] + 1);
            }
        }
    }
    console.log(dp1);
    console.log(dp2);
    let answer = 0;
    for (let i = 0; i < dp1.length; i++) {
        answer = Math.max(answer, dp1[i] + dp2[i] + 1);
    }
    console.log(answer);
}

solution(param);
