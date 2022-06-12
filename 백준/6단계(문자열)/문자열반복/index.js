var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const N = Number(input[0]);

    for (let i = 1; i <= N; i++) {
        const str = input[i].split(" ");
        const times = Number(str[0]);
        const targetStr = str[1];

        let result = "";
        for (let j = 0; j < targetStr.length; j++) {
            result += targetStr[j].repeat(times);
        }
        console.log(result);
    }
}

console.log(soltuion(param));
