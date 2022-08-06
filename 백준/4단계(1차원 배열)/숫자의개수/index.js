var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const A = Number(input[0]);
    const B = Number(input[1]);
    const C = Number(input[2]);
    const mul = String(A * B * C);

    const dict = mul.split("").reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    let result = "";
    for (let i = 0; i <= 9; i++) {
        result += (dict[i] || 0) + "\n";
    }
    return result;
}

console.log(soltuion(param));
