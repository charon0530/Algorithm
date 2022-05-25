var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin" or 0
    .toString()
    .split("\n");

function soltuion(input = [[]]) {
    const [H, M] = input[0].split(" ").map((x) => Number(x));
    const dur = Number(input[1]);
    let totalMin = H * 60 + M + dur;

    let resultH = parseInt(totalMin / 60);
    const resultM = totalMin - resultH * 60;
    if (resultH >= 24) resultH -= 24;
    return `${resultH} ${resultM}`;
}

console.log(soltuion(param));
