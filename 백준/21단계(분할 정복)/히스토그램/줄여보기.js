var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let lineIdx = 0;
    str = "";
    while (true) {
        let answer = 0;
        const [N, ...tempList] = input[lineIdx++].split(" ").map(Number);
        if (N === 0) break;
        const numList = [];
        for (let i = 0; i < N; i++) {
            numList.push([tempList[i], i]);
        }

        const stack = [];
        stack.push(numList[0]);
        for (let i = 1; i < numList.length; i++) {
            const [curVal, curIdx] = numList[i];

            let tempIdx = curIdx;
            while (stack.length !== 0 && stack[stack.length - 1][0] >= curVal) {
                const [topVal, topIdx] = stack.pop();
                tempIdx = topIdx;
                answer = Math.max(answer, (curIdx - topIdx) * topVal);
            }
            stack.push([curVal, tempIdx]);
        }
        while (stack.length > 0) {
            const [topVal, topIdx] = stack.pop();
            answer = Math.max(answer, (numList.length - topIdx) * topVal);
        }
        str += String(answer) + "\n";
    }
    console.log(str);
}

solution(param);
