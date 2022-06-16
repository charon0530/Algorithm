var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M, R] = input[0].split(" ").map(Number);
    const graph = Array.from({ length: N + 1 }, () => new Array());
    for (let i = 1; i <= M; i++) {
        const [s, e] = input[i].split(" ").map(Number);
        graph[s].push(e);
        graph[e].push(s);
    }
    for (let i = 1; i <= N; i++) {
        graph[i].sort((a, b) => a - b);
    }
    const ch = new Array(N + 1).fill(0);
    let times = 1;

    const queue = [];
    ch[R] = times++;
    queue.push(R);

    while (queue.length) {
        const curNode = queue.shift();

        for (let next of graph[curNode]) {
            if (ch[next] !== 0) continue;

            ch[next] = times++;
            queue.push(next);
        }
    }
    //console.log(ch);
    let str = "";
    for (let i = 1; i <= N; i++) {
        str += ch[i] + "\n";
    }
    console.log(str);
}

solution(param);
