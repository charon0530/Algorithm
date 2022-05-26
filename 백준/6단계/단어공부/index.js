var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const str = String(input[0]).toUpperCase();
    const dict = str.split("").reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

    const max = Math.max(...Object.values(dict));
    const result = Object.keys(dict).filter((x) => dict[x] === max);

    return result.length > 1 ? "?" : result[0];
}

console.log(soltuion(param));
