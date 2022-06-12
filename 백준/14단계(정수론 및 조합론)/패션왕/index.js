var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let i = 1;
    let result = [];
    let time = 0;
    while (true) {
        if (time === N) break;
        const cur_line = Number(input[i++]);

        const dict = {};
        for (let k = 0; k < cur_line; k++) {
            const [item, c] = input[i++].split(" ");
            if (dict[c] === undefined) {
                dict[c] = 1;
            } else dict[c]++;
        }

        result.push(
            Object.values(dict)
                .map((x) => x + 1)
                .reduce((acc, val) => acc * val, 1) - 1
        );
        time++;
    }
    console.log(result.join("\n"));
}

solution(param);
