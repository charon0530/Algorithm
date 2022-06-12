var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function soltuion(input) {
    const boolArr = new Array(10001).fill(true);
    boolArr[0] = boolArr[1] = false;
    for (let i = 2; i * i <= 10000; i++) {
        for (let j = i * i; j <= 10000; j += i) {
            boolArr[j] = false;
        }
    }
    const N = Number(input[0]);
    outer: for (let i = 1; i <= N; i++) {
        const num = Number(input[i]);
        const leftList = [];
        const rightList = [];
        for (let j = 2; j <= num / 2; j++) {
            if (boolArr[j]) leftList.push(j);
        }
        for (let j = num / 2; j <= num; j++) {
            if (boolArr[j]) rightList.push(j);
        }

        //console.log(leftList, rightList);
        for (let lt = leftList.length - 1; lt >= 0; lt--) {
            const lv = leftList[lt];
            for (let rt = 0; rt < rightList.length; rt++) {
                const rv = rightList[rt];
                if (lv + rv === num) {
                    console.log(lv + " " + rv);
                    continue outer;
                }
            }
        }
    }
}

console.log(soltuion(param));
