var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const M = Number(input[0]);
    const N = Number(input[1]);
    const boolArr = new Array(N + 1).fill(true);
    boolArr[0] = false;
    boolArr[1] = false;
    for (let i = 2; i <= Math.sqrt(N); i++) {
        for (let j = i * i; j <= N; j += i) {
            boolArr[j] = false;
        }
    }
    const list = boolArr
        .map((x, i) => (x === true ? i : -1))
        .filter((x) => x >= M);

    console.log(list);
    if (list.length === 0) {
        console.log(-1);
    } else {
        console.log(list.reduce((a, v) => a + v, 0));
        console.log(list[0]);
    }
}

console.log(soltuion(param));
