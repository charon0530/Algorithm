var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const times = Number(input[0]);

    const arr = Array.from({ length: 15 }, () => new Array(15).fill(1));
    for (let j = 1; j <= 14; j++) {
        arr[0][j] = j;
    }
    for (let f = 1; f <= 14; f++) {
        for (let h = 2; h <= 14; h++) {
            arr[f][h] = arr[f - 1][h] + arr[f][h - 1];
        }
    }

    let start = 1;
    for (let i = 0; i < times; i++) {
        const k = Number(input[start]);
        const n = Number(input[start + 1]);
        start += 2;

        console.log(arr[k][n]);
    }
}

soltuion(param);
