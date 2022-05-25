var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin" or 0
    .toString()
    .split("\n");

function soltuion(input = [[]]) {
    input = input[0].split(" ");
    const h = Number(input[0]);
    const m = Number(input[1]);
    let totalMin = h * 60 + m;

    totalMin -= 45;
    if (totalMin < 0) totalMin += 1440;
    const resultH = parseInt(totalMin / 60);
    const resultM = totalMin - resultH * 60;
    return `${resultH} ${resultM}`;
}

console.log(soltuion(param));
