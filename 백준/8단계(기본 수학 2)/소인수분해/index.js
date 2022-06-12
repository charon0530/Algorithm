var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    let N = Number(input[0]);

    for (let i = 2; i <= N; i++) {
        if (N === 1) return;
        if (i > N) return;
        while (true) {
            if (N % i === 0) {
                console.log(i);
                N /= i;
            } else {
                break;
            }
        }
    }
}

console.log(soltuion(param));
