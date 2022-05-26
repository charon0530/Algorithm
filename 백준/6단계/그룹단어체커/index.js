var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    let result = 0;
    const N = Number(input[0]);
    outer: for (let k = 1; k <= N; k++) {
        const str = input[k];

        const set = new Set(str.split(""));
        for (let char of set) {
            const reg = new RegExp(`[^${char}]`);

            if (str.split(reg).filter((x) => x).length > 1) continue outer;
        }
        result++;
    }

    return result;
}

console.log(soltuion(param));
