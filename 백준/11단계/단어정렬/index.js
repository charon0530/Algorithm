var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let list = [];
    for (let i = 1; i <= N; i++) {
        list.push(input[i]);
    }
    list.sort((a, b) => {
        if (a.length === b.length) return a.localeCompare(b);
        return a.length - b.length;
    });
    list = [...new Set(list)];
    let str = "";
    for (let i = 0; i < list.length; i++) {
        str += String(list[i]) + "\n";
    }

    console.log(str);
}

solution(param);
