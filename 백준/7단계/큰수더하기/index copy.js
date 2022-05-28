var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    let [A, B] = input[0].split(" ");
    if (A.length < B.length) {
        [A, B] = [B, A];
    }
    B = B.padStart(A.length, "0");
    let result = [];
    let c = 0;
    for (let i = 0; i < B.length; i++) {
        const targetA = Number(A[A.length - 1 - i]);
        const targetB = Number(B[B.length - 1 - i]);

        if (targetA + targetB + c >= 10) {
            result.push(targetA + targetB + c - 10);
            c = 1;
        } else {
            result.push(targetA + targetB + c);
            c = 0;
        }
    }

    if (c === 1) result.push(c);
    console.log(result.reverse().join(""));
}
soltuion(param);
