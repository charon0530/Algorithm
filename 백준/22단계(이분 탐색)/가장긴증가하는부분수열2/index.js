var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const numList = input[1].split(" ").slice(0, N).map(Number);

    const tempList = [];

    for (let val of numList) {
        if (tempList.length === 0 || tempList[tempList.length - 1] < val) {
            tempList.push(val);
            continue;
        }

        let lt = 0;
        let rt = tempList.length - 1;
        let pos = -1;
        while (lt <= rt) {
            const mid = Math.floor((lt + rt) / 2);

            if (tempList[mid] >= val) {
                pos = mid;
                rt = mid - 1;
            } else {
                lt = mid + 1;
            }
        }
        tempList[pos] = val;
        //console.log(tempList);
    }
    console.log(tempList.length);
}

solution(param);
