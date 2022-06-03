var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = [];
    input[1] = input[1].split(" ").map(Number);
    for (let i = 0; i < N; i++) {
        numList.push(input[1][i]);
    }
    const opList = [];
    input[2] = input[2].split(" ").map(Number);
    for (let i = 0; i < 4; i++) {
        opList.push(input[2][i]);
    }
    //console.log(numList, opList);

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    function DFS(count, val) {
        if (count === numList.length - 1) {
            max = Math.max(max, val);
            min = Math.min(min, val);
            return;
        } else {
            for (let i = 0; i < 4; i++) {
                if (opList[i] === 0) continue;

                let tempVal = val;
                if (i === 0) {
                    tempVal = tempVal + numList[count + 1];
                } else if (i === 1) {
                    tempVal = tempVal - numList[count + 1];
                } else if (i === 2) {
                    tempVal = tempVal * numList[count + 1];
                } else if (i === 3) {
                    tempVal = parseInt(tempVal / numList[count + 1]);
                    if (1 / tempVal === -Infinity) tempVal = 0;
                }
                opList[i]--;
                DFS(count + 1, tempVal);
                opList[i]++;
            }
        }
    }

    DFS(0, numList[0]);
    console.log(max);
    console.log(min);
}

solution(param);
