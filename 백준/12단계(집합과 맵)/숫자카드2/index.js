var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const sgList = input[1].split(" ").map((x) => Number(x));
    const M = Number(input[2]);
    const cardList = input[3].split(" ").map((x) => Number(x));

    const dict = sgList.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    let str = [];
    for (let i = 0; i < cardList.length; i++) {
        const target = cardList[i];
        if (dict[target] === undefined) str.push(0);
        else str.push(dict[target]);
    }
    return str.join(" ");
}

console.log(solution(param));
