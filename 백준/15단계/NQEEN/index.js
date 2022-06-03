var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function isOK(list, cur, N) {
    const [cx, cy] = cur;
    if (cx > N || cy > N) return true;
    for (let i = 0; i < list.length; i++) {
        const [tx, ty] = list[i];

        if (tx === cx || cy === ty) return false;
        if (Math.abs(tx - cx) === Math.abs(ty - cy)) return false;
    }
    return true;
}
function solution(input) {
    const N = Number(input[0]);
    let count = 0;
    function DFS(curLine, temp = []) {
        if (curLine > N) {
            count++;
            return;
        }
        for (let i = 1; i <= N; i++) {
            const [nx, ny] = [i, curLine];
            if (isOK(temp, [nx, ny], N)) {
                DFS(curLine + 1, [...temp, [nx, ny]]);
            }
        }
    }

    DFS(1, []);

    console.log(count);
}

solution(param);
