var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [x, y, w, h] = input[0].split(" ").map((x) => Number(x));

    const points = [
        [x, 0],
        [x, h],
        [0, y],
        [w, y],
    ];

    result = [];
    for (let [x1, y1] of points) {
        result.push(Math.abs(x - x1) + Math.abs(y - y1));
    }
    return Math.min(...result);
}

console.log(solution(param));
