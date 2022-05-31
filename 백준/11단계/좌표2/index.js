var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const list = [];
    for (let i = 1; i <= N; i++) {
        list.push(input[i].split(" ").map((x) => Number(x)));
    }
    list.sort((a, b) => {
        if (a[1] === b[1]) return a[0] - b[0];
        return a[1] - b[1];
    });
    let str = "";
    for (let i = 0; i < list.length; i++) {
        const [f, s] = list[i];
        str += String(f) + " " + String(s) + "\n";
    }
    console.log(str);
}

solution(param);
