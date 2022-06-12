var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    let up = Number(input[0]);
    let down = Number(input[1]);
    while (true) {
        if (down === 0) break;
        const cur = down % 10;
        down = parseInt(down / 10);
        console.log(up * cur);
    }
    console.log(up * Number(input[1]));
}

soltuion(param);
