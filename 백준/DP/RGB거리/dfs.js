var fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(list) {
    let answer = Number.MAX_SAFE_INTEGER;
    const N = Number(input[0]);
    const cost = input
        .slice(1, input.length)
        .map((str) => str.split(" ").map((x) => Number(x)));

    const memo = Array.from({ length: N }, () =>
        new Array(3).fill(Number.MAX_SAFE_INTEGER)
    );

    function DFS(house, beforeColor, beforeCost) {
        if (house === N) {
            answer = Math.min(answer, beforeCost);
        } else {
            if (beforeCost >= answer) return;
            if (beforeColor !== -1) {
                if (memo[house][beforeColor] < beforeCost) {
                    return;
                } else {
                    memo[house][beforeColor] = beforeCost;
                }
            }
            for (let i = 0; i <= 2; i++) {
                if (i === beforeColor) continue;

                DFS(house + 1, i, beforeCost + cost[house][i]);
            }
        }
    }
    DFS(0, -1, 0);
    console.log(memo);
    return answer;
}

console.log(solution(input));
