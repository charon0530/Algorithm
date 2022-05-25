var fs = require("fs");
var input = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

let mini = Number.MAX_SAFE_INTEGER;
const N = Number(input[0]);

const color_val = input
    .slice(1, input.length)
    .map((str) => str.split(" ").map((x) => Number(x)));

const mini_val = Array.from({ length: N }, () =>
    new Array(3).fill(Number.MAX_SAFE_INTEGER)
);

function dfs(level, nowNum, sum) {
    // 합이 최소값보다 크면 종료
    if (sum > mini) return;

    // 끝에 도달하면 종료
    if (level == N) {
        if (sum < mini) mini = sum;
        return;
    }

    for (let i = 0; i < 3; i++) {
        // 색이 같으면 그냥 넘겨
        if (i == nowNum) continue;

        // 방문한 곳의 값이 더 작거나 같으면 종료
        if (mini_val[level][i] <= sum + color_val[level][i]) continue;
        else mini_val[level][i] = sum + color_val[level][i];

        // 다음 단계
        dfs(level + 1, i, mini_val[level][i]);
    }
}

for (let i = 0; i < 3; i++) {
    mini_val[0][i] = color_val[0][i];
}
for (let i = 0; i < 3; i++) {
    dfs(1, i, color_val[0][i]);
}
console.log(mini_val);
console.log(mini);
