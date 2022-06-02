var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

// 1x5~~~ 2X5~~~ 3X5~~~ NX5~~~
function getCountOfNum(num, key) {
    let count = 0;
    while (true) {
        if (num < key) break;

        count += parseInt(num / key);
        num /= key;
    }
    return count;
}
function solution(input) {
    const [n, m] = input[0].split(" ").map(Number);
    //nCm
    const fiveCount =
        getCountOfNum(n, 5) - getCountOfNum(m, 5) - getCountOfNum(n - m, 5);
    const twoCount =
        getCountOfNum(n, 2) - getCountOfNum(m, 2) - getCountOfNum(n - m, 2);

    console.log(Math.min(fiveCount, twoCount));
}

solution(param);
