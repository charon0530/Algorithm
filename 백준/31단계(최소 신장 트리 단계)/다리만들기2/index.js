var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const graph = Array.from({ length: N }, () => []);
    let inputIdx = 1;
    for (let i = 0; i < N; i++) {
        graph[i] = input[inputIdx++].split(" ").slice(0, M).map(Number);
    }
    //console.table(graph);

    const visited = Array.from({ length: N }, () => new Array(M).fill(0));
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    function DFS(curR, curC, num) {
        for (let i = 0; i < 4; i++) {
            const nextR = curR + dr[i];
            const nextC = curC + dc[i];

            if (nextR < 0 || nextR >= N || nextC < 0 || nextC >= M) continue;
            if (graph[nextR][nextC] === 0) continue;
            if (visited[nextR][nextC] === 1) continue;
            visited[nextR][nextC] = 1;
            graph[nextR][nextC] = num;
            DFS(nextR, nextC, num);
        }
    }
    let setNum = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 0) continue;
            if (visited[i][j] === 1) continue;

            setNum++;
            visited[i][j] = 1;
            graph[i][j] = setNum;
            DFS(i, j, setNum);
        }
    }
    //console.table(graph);

    const edges = [];
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j] === 0) continue;
            const start = graph[i][j];

            for (let k = 0; k < 4; k++) {
                let end = start;
                let [row, col] = [i, j];
                let dist = 0;
                let flag = false;
                row += dr[k];
                col += dc[k];
                dist++;
                while (true) {
                    if (row < 0 || row >= N || col < 0 || col >= M) break;
                    if (graph[row][col] !== 0) {
                        flag = true;
                        end = graph[row][col];
                        dist--;
                        break;
                    }
                    row += dr[k];
                    col += dc[k];
                    dist++;
                }
                if (flag && dist >= 2 && start !== end) {
                    edges.push([start, end, dist]);
                }
            }
        }
    }
    const parent = new Array(setNum + 1).fill(null).map((val, idx) => idx);

    function union(a, b) {
        parent[a] = b;
    }
    function find(num) {
        let root = num;
        while (root !== parent[root]) {
            root = parent[root];
        }

        let el = num;
        while (el !== parent[el]) {
            const temp = el;
            el = parent[el];
            parent[temp] = root;
        }
        return root;
    }
    edges.sort((a, b) => b[2] - a[2]);
    let answer = 0;
    let edgeNum = 0;
    while (true) {
        if (edgeNum === setNum - 1) break;
        if (edges.length === 0) {
            console.log(-1);
            return;
        }
        const [s, e, dist] = edges.pop();
        const a = find(s);
        const b = find(e);
        if (a === b) continue;

        union(a, b);
        answer += dist;
        edgeNum++;
    }
    console.log(answer);
}

solution(param);
