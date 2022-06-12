var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const N = Number(input[0]);
    for (let time = 1; time <= N; time++) {
        const str = input[time];
        const strList = str
            .split("X")
            .filter((x) => x)
            .map((s) => s.length)
            .reduce((acc, val) => acc + (val * (val + 1)) / 2, 0);
        console.log(strList);
    }
}

console.log(soltuion(param));
