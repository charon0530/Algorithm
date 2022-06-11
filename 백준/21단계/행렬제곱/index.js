var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let lineIdx = 0;
    const [N, B] = input[lineIdx++].split(" ").map(BigInt);
    const A = new Array(N);
    for (let i = 0; i < N; i++) {
        A[i] = input[lineIdx++].split(" ").map(BigInt);
    }

    //console.table(A);
    function matrixMul(A, B) {
        const N = A.length;
        const M = A[0].length;
        const K = B.length;
        const result = Array.from({ length: N }, () => new Array(K).fill(0n));
        for (let i = 0; i < N; i++) {
            for (let k = 0; k < K; k++) {
                for (let j = 0; j < M; j++) {
                    result[i][k] =
                        ((result[i][k] % 1000n) +
                            (((A[i][j] % 1000n) * (B[j][k] % 1000n)) % 1000n)) %
                        1000n;
                }
            }
        }
        return result;
    }
    //console.table(matrixMul(A, A));
    function DFS(curB) {
        if (curB === 1n) {
            A[0][0] %= 1000n;
            A[0][1] %= 1000n;
            A[1][0] %= 1000n;
            A[1][1] %= 1000n;
            return A;
        } else {
            const left = BigInt(parseInt(curB / 2n));
            const right = curB - left;
            const lVal = DFS(left);
            const rVal = left === right ? lVal : matrixMul(lVal, A);
            return matrixMul(lVal, rVal);
        }
    }
    const ret = DFS(B);
    let str = "";
    for (let i = 0; i < ret.length; i++) {
        str += ret[i].map(String).join(" ") + "\n";
    }
    console.log(str);
}

solution(param);
