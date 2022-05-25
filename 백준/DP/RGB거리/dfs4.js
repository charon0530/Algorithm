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

    function DFS(house, curColor, curCost) {
        if (house === N - 1) {
            answer = Math.min(answer, curCost);
        } else {
            if (curCost >= answer) return;

            for (let i = 0; i <= 2; i++) {
                if (i === curColor) continue;
                if (memo[house + 1][i] <= curCost + cost[house + 1][i])
                    continue;
                else memo[house + 1][i] = curCost + cost[house + 1][i];

                DFS(house + 1, i, curCost + cost[house + 1][i]);
            }
        }
    }
    DFS(0, 0, cost[0][0]);
    DFS(0, 1, cost[0][1]);
    DFS(0, 2, cost[0][2]);
    console.log(memo);
    return answer;
}

console.log(solution(input));
