var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const N = Number(input[0]);
    for (let time = 1; time <= N; time++) {
        const line = input[time].split(" ").map((x) => Number(x));
        const studentNum = line.shift();

        const avg = line.reduce((a, v) => a + v, 0) / studentNum;
        let upperCount = 0;
        for (let i = 0; i < studentNum; i++) {
            if (line[i] > avg) upperCount++;
        }
        console.log(((upperCount / studentNum) * 100).toFixed(3) + "%");
    }
}

console.log(soltuion(param));
