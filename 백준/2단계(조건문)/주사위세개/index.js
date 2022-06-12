var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin" or 0
    .toString()
    .split("\n");

function soltuion(input = [[]]) {
    const [A, B, C] = input[0].split(" ").map((x) => Number(x));
    const dict = {};
    dict[A] = (dict[A] || 0) + 1;
    dict[B] = (dict[B] || 0) + 1;
    dict[C] = (dict[C] || 0) + 1;
    console.log(dict);

    let max = 0;
    let target = -1;
    for (let [key, val] of Object.entries(dict)) {
        if (val > max) {
            max = val;
            target = Number(key);
        }
    }
    if (max === 1) {
        const maxKey = Math.max(...Object.keys(dict).map((x) => Number(x)));
        return maxKey * 100;
    } else if (max === 2) {
        let maxKey = -1;
        for (let [key, val] of Object.entries(dict)) {
            if (val === 2) {
                maxKey = Number(key);
                break;
            }
        }
        return 1000 + maxKey * 100;
    } else {
        return target * 1000 + 10000;
    }
}

console.log(soltuion(param));
