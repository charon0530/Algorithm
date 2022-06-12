var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const numList = input[1].split(" ").slice(0, N).map(Number);

    function isPossible(num) {
        let lenSum = 0;
        for (let len of numList) {
            lenSum += Math.max(0, len - num);
        }
        return lenSum >= M;
    }
    let lt = 0;
    let rt = Math.max(...numList);
    let answer = 0;
    while (lt <= rt) {
        const mid = Math.floor((lt + rt) / 2);
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
