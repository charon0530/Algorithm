var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [K, N] = input[0].split(" ").map(Number);
    const numList = [];
    for (let i = 1; i <= K; i++) {
        numList.push(Number(input[i]));
    }

    function isPossible(num) {
        let count = 0;
        for (let len of numList) {
            count += Math.floor(len / num);
        }
        if (count >= N) return true;
        return false;
    }
    let lt = 0;
    let rt = Math.max(...numList);
    let answer = 0;
    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);
        if (isPossible(mid)) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    console.log(answer);
}

solution(param);
