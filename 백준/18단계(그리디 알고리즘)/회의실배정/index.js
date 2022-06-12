var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let time = 0;
    let answer = 0;
    const list = [];
    for (let i = 1; i <= N; i++) {
        const cur = input[i];
        const [s, e] = cur.split(" ").map(Number);

        list.push([s, e]);
    }
    list.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));
    //console.log(list);

    for (let i = 0; i < list.length; i++) {
        const [curS, curE] = list[i];
        if (curS < time) continue;

        answer++;
        time = curE;
    }
    console.log(answer);
}

solution(param);
