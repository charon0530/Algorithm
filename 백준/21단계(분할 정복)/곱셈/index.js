var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [A, B, C] = input[0].split(" ").map(BigInt);

    function DFS(curB) {
        if (curB === 1n) {
            return A % C;
        } else {
            const left = BigInt(parseInt(curB / 2n));
            const right = curB - left;
            const lV = DFS(left);
            const rV = left !== right ? ((lV % C) * (A % C)) % C : lV;
            return ((lV % C) * (rV % C)) % C;
        }
    }
    console.log(String(DFS(B)));
}

solution(param);
