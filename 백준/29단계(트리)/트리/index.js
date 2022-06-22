var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let lineIdx = 0;
    let caseNum = 0;
    let str = "";
    while (true) {
        const [n, m] = input[lineIdx++].split(" ").map(Number);
        if (n === 0 && n === 0) {
            break;
        }
        let answer = 0;
        caseNum++;
        const graph = Array.from({ length: n + 1 }, () => []);
        for (let i = 0; i < m; i++) {
            const [s, e] = input[lineIdx++].split(" ").map(Number);
            graph[s].push(e);
            graph[e].push(s);
        }
        const ch = new Array(n + 1).fill(0);
        outer: for (let i = 1; i <= n; i++) {
            if (ch[i] === 1) continue;
            let flag = true;
            const queue = [];
            let queueIdx = 0;

            queue.push([i, -1]);
            ch[i] = 1;

            while (queueIdx < queue.length) {
                const [curNode, parent] = queue[queueIdx++];

                for (const next of graph[curNode]) {
                    if (next === parent) continue;
                    if (ch[next] === 1) {
                        flag = false;
                        continue outer;
                    }
                    ch[next] = 1;
                    queue.push([next, curNode]);
                }
            }
            if (flag) answer++;
        }
        if (answer === 0) {
            str += `Case ${caseNum}: No trees.`;
        } else if (answer === 1) {
            str += `Case ${caseNum}: There is one tree.`;
        } else {
            str += `Case ${caseNum}: A forest of ${answer} trees.`;
        }
        str += "\n";
    }
    console.log(str);
}

solution(param);
