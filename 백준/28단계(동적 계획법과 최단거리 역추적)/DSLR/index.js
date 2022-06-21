var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const T = Number(input[0]);
    let lineIdx = 1;
    for (let i = 0; i < T; i++) {
        const [A, B] = input[lineIdx++].split(" ").map(Number);

        const queue = [];
        const ch = new Array(10000).fill(0);
        const parent = new Array(10000).fill([-1, -1]);
        queue.push(A);
        ch[A] = 1;
        let queueIdx = 0;

        while (queueIdx < queue.length) {
            const curNum = queue[queueIdx++];
            if (curNum === B) {
                break;
            }

            const dResult =
                curNum * 2 > 9999 ? (curNum * 2) % 10000 : curNum * 2;
            if (ch[dResult] !== 1) {
                ch[dResult] = 1;
                parent[dResult] = [curNum, "D"];
                queue.push(dResult);
            }

            const sResult = curNum === 0 ? 9999 : curNum - 1;
            if (ch[sResult] !== 1) {
                ch[sResult] = 1;
                parent[sResult] = [curNum, "S"];
                queue.push(sResult);
            }

            const firstNum = Math.floor(curNum / 1000);
            const lResult = (curNum % 1000) * 10 + firstNum;
            if (ch[lResult] !== 1) {
                ch[lResult] = 1;
                parent[lResult] = [curNum, "L"];
                queue.push(lResult);
            }

            const lastNum = curNum % 10;
            const rResult = 1000 * lastNum + Math.floor(curNum / 10);
            if (ch[rResult] !== 1) {
                ch[rResult] = 1;
                parent[rResult] = [curNum, "R"];
                queue.push(rResult);
            }
        }
        let result = [];
        let cur = parent[B];
        while (true) {
            if (cur[0] === -1) break;
            result.push(cur[1]);
            cur = parent[cur[0]];
        }
        console.log(result.reverse().join(""));
    }
}

solution(param);
