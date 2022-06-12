var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let answer = "";
    const list = input
        .slice(1, N + 1)
        .map((x) => x.split(" ").map((x) => Number(x)));

    //console.log(list);
    for (let i = 0; i < list.length; i++) {
        let over = 0;
        for (let j = 0; j < list.length; j++) {
            if (i === j) continue;
            if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) over++;
        }
        answer += String(over + 1) + " ";
    }
    console.log(answer);
}

solution(param);
