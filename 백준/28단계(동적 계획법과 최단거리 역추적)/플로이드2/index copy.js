var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const n = Number(input[0]);
    const m = Number(input[1]);
    const dist = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    );
    const parent = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(-1)
    );
    for (let i = 2; i < m + 2; i++) {
        const [s, e, c] = input[i].split(" ").map(Number);
        //dist[s][e] = Math.min(c, dist[s][e]);
        //여기도 dist가 바뀜으로 여기서도 parent 설정
        if (dist[s][e] > c) {
            dist[s][e] = c;
        }
    }
    for (let i = 1; i <= n; i++) {
        //여기서도 바뀌어야 하지만 -1로 초기화 시켜놔서 안 해도 됨
        parent[i][i] = i;
        dist[i][i] = 0;
    }
    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    parent[i][j] = k;
                }
            }
        }
    }
    let str = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (dist[i][j] === Number.MAX_SAFE_INTEGER) {
                str += 0 + " ";
            } else str += dist[i][j] + " ";
        }
        str += "\n";
    }
    for (let i = 1; i <= n; i++) {
        const curParent = parent[i];

        for (let j = 1; j <= n; j++) {
            let result = [];
            let num = j;
            while (true) {
                if (curParent[num] === num) break;
                result.push(num);
                num = curParent[num];
            }
            if (result.length === 1) {
                str += "0";
            } else {
                str += String(result.length) + " " + result.reverse().join(" ");
            }
            str += "\n";
        }
    }
    console.log(str);
}

solution(param);
