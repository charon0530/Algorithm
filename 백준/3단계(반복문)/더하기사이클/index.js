var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin" or 0
    .toString()
    .split("\n");

function soltuion(input = ["", ""]) {
    if (input[0].length === 1) input[0] = "0" + input[0];
    const target = input[0];
    let num = input[0];
    let count = 0;
    while (true) {
        count++;
        if (num.length === 1) num = "0" + num;
        const savedNum = num[num.length - 1];

        const l = num[0];
        const r = num[1];

        sum = String(Number(l) + Number(r));

        num = savedNum + sum[sum.length - 1];
        if (target === num) return count;
    }
}

console.log(soltuion(param));
