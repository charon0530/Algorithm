var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N] = input[0].split(" ").map((x) => Number(x));

    let str = "";
    for (let i = 1; i <= N; i++) {
        const target = input[i];

        const [x1, y1, r1, x2, y2, r2] = target
            .split(" ")
            .map((x) => Number(x));

        const dist = Math.sqrt(
            Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2)
        );

        if (dist === 0 && r1 === r2) str += "-1\n";
        else if (Math.abs(r1 - r2) === dist || Math.abs(r1 + r2) === dist)
            str += "1\n";
        else if (Math.abs(r1 - r2) < dist && dist < Math.abs(r1 + r2))
            str += "2\n";
        else str += "0\n";
    }
    console.log(str);
}

solution(param);
