var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const A = input[1].split(" ").map(Number).slice(0, N);
    const M = Number(input[2]);
    const B = input[3].split(" ").map(Number).slice(0, M);
    let str = "";
    A.sort((a, b) => a - b);
    for (let val of B) {
        let flag = false;
        let lt = 0;
        let rt = A.length - 1;

        while (lt <= rt) {
            let mid = parseInt((lt + rt) / 2);
            if (A[mid] === val) {
                flag = true;
                break;
            } else if (A[mid] < val) {
                lt = mid + 1;
            } else {
                rt = mid - 1;
            }
        }
        if (flag) str += "1\n";
        else str += "0\n";
    }
    console.log(str);
}

solution(param);
