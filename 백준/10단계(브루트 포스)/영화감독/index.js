var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);

    let deathNumCount = 0;
    let num = 666;
    while (true) {
        if (String(num).indexOf("666") !== -1) {
            deathNumCount++;
            if (deathNumCount === N) return num;
        }
        num++;
    }
}

console.log(solution(param));
