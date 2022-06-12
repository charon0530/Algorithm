var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    let boolArr = new Array(123456 * 2 + 1).fill(true);
    boolArr[0] = false;
    boolArr[1] = false;
    for (let i = 2; i * i <= 123456 * 2; i++) {
        for (let j = i * i; j <= 123456 * 2; j += i) {
            boolArr[j] = false;
        }
    }
    boolArr = boolArr.map((v, i) => (v ? i : -1)).filter((x) => x !== -1);

    let lineNum = 0;
    while (true) {
        const N = Number(input[lineNum++]);
        if (N === 0) return;

        const min = N;
        const max = 2 * N;
        console.log(boolArr.filter((x) => x > N && x <= max).length);
    }
}

console.log(soltuion(param));
