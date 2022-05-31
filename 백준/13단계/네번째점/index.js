var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [x1, y1] = input[0].split(" ").map((x) => Number(x));
    const [x2, y2] = input[1].split(" ").map((x) => Number(x));
    const [x3, y3] = input[2].split(" ").map((x) => Number(x));

    const [x4, y4] = [x1 ^ x2 ^ x3, y1 ^ y2 ^ y3];
    console.log(x4 + " " + y4);
}

solution(param);
