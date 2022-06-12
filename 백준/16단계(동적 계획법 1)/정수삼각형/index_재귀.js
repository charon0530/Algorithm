var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = new Array(N);
    for (let i = 1; i <= N; i++) {
        const line = input[i].split(" ").map(Number);
        numList[i - 1] = line;
    }
    console.log(numList);
    let answer = [];
    let count = 0;
    function DFS(curRow, curCol, sum) {
        count++;
        if (curRow >= N) {
            //answer = Math.max(answer, sum);
            answer.push(sum);
            return;
        } else {
            DFS(curRow + 1, curCol, sum + numList[curRow][curCol] || 0);
            DFS(curRow + 1, curCol + 1, sum + numList[curRow][curCol] || 0);
        }
    }
    DFS(0, 0, 0);
    console.log(count);

    console.log(answer);
}

solution(param);
