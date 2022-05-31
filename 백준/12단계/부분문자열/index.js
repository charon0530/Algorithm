var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const len = input[0].length;
    const set = new Set();
    for (let i = 1; i <= len; i++) {
        let cursor = 0;
        while (true) {
            if (cursor + i > len) break;

            const part = input[0].slice(cursor, cursor + i);
            set.add(part);
            cursor++;
        }
    }
    return set.size;
}

console.log(solution(param));
