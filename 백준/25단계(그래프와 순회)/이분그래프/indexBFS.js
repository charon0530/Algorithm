var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    let str = "";

    const N = Number(input[0]);
    let lineIdx = 1;
    for (let i = 0; i < N; i++) {
        const [V, E] = input[lineIdx++].split(" ").map(Number);

        const graph = Array.from({ length: V + 1 }, () => new Array());
        for (let j = 0; j < E; j++) {
            const [s, e] = input[lineIdx++].split(" ").map(Number);
            graph[s].push(e);
            graph[e].push(s);
        }

        const ch = new Array(V + 1).fill(0);
        let flag = false;

        outer: for (let n = 1; n <= V; n++) {
            if (ch[n] === 0) {
                const queue = [];

                ch[n] = 1;
                queue.push(n);
                let queueIdx = 0;
                while (queueIdx < queue.length) {
                    const cur = queue[queueIdx++];

                    for (let next of graph[cur]) {
                        if (ch[next] === 0) {
                            ch[next] = ch[cur] * -1;
                            queue.push(next);
                        } else {
                            if (ch[next] === ch[cur]) {
                                flag = true;
                                break outer;
                            }
                        }
                    }
                }
            }
        }
        str += flag ? "NO\n" : "YES\n";
    }
    console.log(str);
}

solution(param);
