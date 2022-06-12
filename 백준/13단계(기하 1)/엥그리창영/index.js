var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, W, H] = input[0].split(" ").map((x) => Number(x));

    let str = "";
    for (let i = 1; i <= N; i++) {
        const target = Number(input[i]);

        if (Math.sqrt(W * W + H * H) >= target) str += "DA\n";
        else str += "NE\n";
    }
    return str;
}

console.log(solution(param));
