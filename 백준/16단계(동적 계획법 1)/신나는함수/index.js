var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let i = 0;
    const dp = Array.from({ length: 101 }, () =>
        Array.from({ length: 101 }, () => new Array(101).fill(null))
    );
    for (let i = 0; i <= 50; i++) {
        for (let j = 0; j <= 50; j++) {
            for (let k = 0; k <= 50; k++) {
                dp[i][j][k] = 1;
            }
        }
    }
    const twVal = rec(20, 20, 20);

    for (let i = 71; i <= 100; i++) {
        for (let j = 71; j <= 100; j++) {
            for (let k = 71; k <= 100; k++) {
                dp[i][j][k] = twVal;
            }
        }
    }
    function rec(A, B, C) {
        if (dp[A + 50][B + 50][C + 50] !== null)
            return dp[A + 50][B + 50][C + 50];
        if (A <= 0 || B <= 0 || C <= 0) return 1;
        if (A > 20 || B > 20 || C > 20) return twVal;
        if (A < B && B < C) {
            const temp =
                rec(A, B, C - 1) + rec(A, B - 1, C - 1) - rec(A, B - 1, C);
            dp[A + 50][B + 50][C + 50] = temp;
            return temp;
        }

        const result =
            rec(A - 1, B, C) +
            rec(A - 1, B - 1, C) +
            rec(A - 1, B, C - 1) -
            rec(A - 1, B - 1, C - 1);

        dp[A + 50][B + 50][C + 50] = result;
        return result;
    }
    str = "";
    while (true) {
        const [a, b, c] = input[i++].split(" ").map(Number);
        if (a === b && b === c && c === -1) break;

        str += `w(${a}, ${b}, ${c}) = ${rec(a, b, c)}\n`;
    }
    console.log(str);
}

solution(param);
