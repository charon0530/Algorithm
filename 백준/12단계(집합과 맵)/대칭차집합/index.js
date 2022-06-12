var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map((x) => Number(x));

    const a = new Set(input[1].split(" ").map((x) => Number(x)));
    const b = new Set(input[2].split(" ").map((x) => Number(x)));

    const aMb = [...a].filter((x) => !b.has(x));
    const bMa = [...b].filter((x) => !a.has(x));
    return aMb.length + bMa.length;
}

console.log(solution(param));
