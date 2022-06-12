var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const list = [];
    for (let i = 1; i <= N; i++) {
        list.push(
            input[i].split(" ").map((x, i) => (i === 0 ? Number(x) : String(x)))
        );
    }
    list.sort((a, b) => a[0] - b[0]);
    //console.log(list);
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += String(list[i][0]) + " " + list[i][1] + "\n";
    }
    console.log(str);
}

console.log(solution(param));
