var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const numTable = Array.from({ length: N + 1 }, () =>
        new Array(N + 1).fill(0)
    );
    let lineIdx = 1;
    for (let i = 0; i < N; i++) {
        numTable[i + 1] = [0, ...input[lineIdx++].split(" ").map(Number)];
    }
    console.table(numTable);
    //가로 누적 세로누적
    for (let i = 0; i < numTable.length; i++) {
        for (let j = 1; j < numTable[0].length; j++) {
            numTable[i][j] += numTable[i][j - 1];
        }
    }

    for (let i = 0; i < numTable.length; i++) {
        for (let j = 1; j < numTable[0].length; j++) {
            numTable[j][i] += numTable[j - 1][i];
        }
    }

    console.table(numTable);
    let str = "";
    for (let i = 0; i < M; i++) {
        const [x1, y1, x2, y2] = input[lineIdx++].split(" ").map(Number);

        str +=
            String(
                numTable[x2][y2] -
                    numTable[x1 - 1][y2] -
                    numTable[x2][y1 - 1] +
                    numTable[x1 - 1][y1 - 1]
            ) + "\n";
    }
    console.log(str);
}

solution(param);
