var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const [M, N] = input[0].split(" ").map((x) => Number(x));
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

    list.forEach((x) => {
        console.log(x);
    });
}

console.log(soltuion(param));
