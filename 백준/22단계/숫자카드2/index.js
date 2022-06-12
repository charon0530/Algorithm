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
        let lt = 0;
        let rt = A.length - 1;
        let lowerBound = 0;
        let upperBound = 0;
        let count = 0;
        while (lt <= rt) {
            const mid = parseInt((lt + rt) / 2);

            if (A[mid] >= val) {
                if (A[mid] === val) count++;
                lowerBound = mid;
                rt = mid - 1;
            } else {
                lt = mid + 1;
            }
        }
        if (count === 0) {
            str += "0 ";
            continue;
        }
        let = 0;
        rt = A.length - 1;

        while (lt <= rt) {
            const mid = parseInt((lt + rt) / 2);

            if (A[mid] <= val) {
                upperBound = mid;
                lt = mid + 1;
            } else {
                rt = mid - 1;
            }
        }
        str += upperBound - lowerBound + 1 + " ";
    }
    console.log(str);
}

solution(param);
