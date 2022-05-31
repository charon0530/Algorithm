var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N] = input[0].split(" ").map((x) => Number(x));
    let i = 1;
    for (let times = 1; times <= N; times++) {
        const [x1, y1, x2, y2] = input[i].split(" ").map((x) => Number(x));
        i++;
        const num = Number(input[i]);
        i++;
        const startInList = new Set();
        const endInList = new Set();
        for (let j = 0; j < num; j++) {
            const cur = input[i].split(" ").map((x) => Number(x));
            i++;
            const startDist = Math.sqrt(
                Math.pow(Math.abs(x1 - cur[0]), 2) +
                    Math.pow(Math.abs(y1 - cur[1]), 2)
            );
            const endDist = Math.sqrt(
                Math.pow(Math.abs(x2 - cur[0]), 2) +
                    Math.pow(Math.abs(y2 - cur[1]), 2)
            );
            if (startDist < cur[2]) startInList.add(i);
            if (endDist < cur[2]) endInList.add(i);
        }

        let diff = [...startInList]
            .filter((x) => !endInList.has(x))
            .concat([...endInList].filter((x) => !startInList.has(x)));

        console.log(diff.length);
    }
}

solution(param);
