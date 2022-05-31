var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const list = [];
    for (let i = 1; i <= N; i++) {
        list.push(Number(input[i]));
    }
    list.sort((a, b) => a - b);
    console.log(String(Math.round(list.reduce((a, v) => a + v, 0) / N)));
    console.log(String(list[parseInt(N / 2)]));
    const dict = list.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
    let max = Math.max(...Object.values(dict));
    let maxList = Object.keys(dict)
        .filter((x) => dict[x] === max)
        .sort((a, b) => Number(a) - Number(b));
    if (maxList.length === 1) console.log(String(maxList[0]));
    else console.log(String(maxList[1]));
    console.log(String(list[list.length - 1] - list[0]));
}

solution(param);
