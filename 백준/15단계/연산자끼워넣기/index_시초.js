//SET을 이용해서 해결하였으나 그래도 느리긴 함
var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = [];
    input[1] = input[1].split(" ").map(Number);
    for (let i = 0; i < N; i++) {
        numList.push(input[1][i]);
    }
    const opList = [];
    input[2] = input[2].split(" ").map(Number);
    for (let i = 0; i < 4; i++) {
        const count = input[2][i];
        let target = "";
        if (i === 0) {
            target = "+";
        } else if (i === 1) {
            target = "-";
        } else if (i === 2) {
            target = "x";
        } else if (i === 3) {
            target = "/";
        }
        for (let j = 0; j < count; j++) {
            opList.push(target);
        }
    }
    // console.log(numList);
    // console.log(opList);
    const opComb = new Set();
    const box = new Array(opList.length).fill(null);
    const ch = new Array(opList.length).fill(0);
    function DFS(boxIdx) {
        if (boxIdx === box.length) {
            opComb.add(box.join(","));
        } else {
            for (let i = 0; i < opList.length; i++) {
                if (ch[i] === 1) continue;
                ch[i] = 1;
                box[boxIdx] = opList[i];
                DFS(boxIdx + 1);
                ch[i] = 0;
            }
        }
    }
    DFS(0, []);
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;
    console.log(opComb);

    for (let opCstr of opComb) {
        let opC = opCstr.split(",");
        let val = numList[0];
        for (let i = 0; i < opC.length; i++) {
            if (opC[i] === "+") {
                val = val + numList[i + 1];
            } else if (opC[i] === "-") {
                val = val - numList[i + 1];
            } else if (opC[i] === "x") {
                val = val * numList[i + 1];
            } else if (opC[i] === "/") {
                val = parseInt(val / numList[i + 1]);
                if (1 / val === -Infinity) val = 0;
            }
        }
        max = Math.max(max, val);
        min = Math.min(min, val);
    }
    console.log(max);
    console.log(min);
}

solution(param);
