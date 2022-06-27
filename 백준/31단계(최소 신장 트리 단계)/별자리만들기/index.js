var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const n = Number(input[0]);
    let answer = 0;
    const starList = [];
    let inputIdx = 1;
    for (let i = 0; i < n; i++) {
        starList.push(input[inputIdx++].split(" ").map(Number));
    }
    const set = new Set();
    set.add(0);

    while (true) {
        let curIdx = -1;
        let curVal = Number.MAX_SAFE_INTEGER;

        for (let start of set) {
            const [sX, sY] = starList[start];
            for (let end = 0; end < n; end++) {
                const [eX, eY] = starList[end];
                if (start === end) continue;
                if (set.has(end)) continue;

                let dist = Math.sqrt(
                    Math.pow(eX - sX, 2) + Math.pow(eY - sY, 2)
                );
                if (dist < curVal) {
                    curVal = dist;
                    curIdx = end;
                }
            }
        }
        if (curIdx === -1) break;

        set.add(curIdx);
        answer += curVal;
    }
    console.log(Math.round((answer + Number.EPSILON) * 100) / 100);
}

solution(param);
