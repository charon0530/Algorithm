var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function isTrue(num) {
    if (num < 10) return true;

    const strNum = String(num);
    const gap = strNum[0] - strNum[1];

    for (let i = 0; i < strNum.length - 1; i++) {
        if (Number(strNum[i] - Number(strNum[i + 1])) !== gap) return false;
    }
    return true;
}
function soltuion(input) {
    const N = Number(input[0]);
    let result = 0;
    for (let i = 1; i <= N; i++) {
        if (isTrue(i)) {
            result++;
        }
    }
    return result;
}

console.log(soltuion(param));
