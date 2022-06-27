var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let answer = 0;
    let inputIdx = 1;
    const starList = [];

    for (let i = 0; i < N; i++) {
        starList.push(input[inputIdx++].split(" ").map(Number));
    }
    const edges = [];
    for (let i = 0; i < starList.length; i++) {
        const [sX, sY] = starList[i];
        for (let j = 0; j < starList.length; j++) {
            if (i === j) continue;
            const [eX, eY] = starList[j];
            edges.push([
                i,
                j,
                Math.sqrt(Math.pow(eX - sX, 2) + Math.pow(eY - sY, 2)),
            ]);
        }
    }
    edges.sort((a, b) => b[2] - a[2]);
    const parent = new Array(N).fill(null).map((val, idx) => idx);

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
    let lineNum = 0;
    for (let i = 0; i < M; i++) {
        const [s, e] = input[inputIdx++].split(" ").map(Number);
        if (find(s - 1) !== find(e - 1)) {
            union(find(s - 1), find(e - 1));
            lineNum++;
        }
    }

    while (true) {
        if (lineNum >= N - 1) break;

        const [curS, curE, curDist] = edges.pop();
        if (find(curS) === find(curE)) continue;

        union(find(curS), find(curE));
        answer += curDist;
        lineNum++;
    }
    console.log((Math.round((answer + Number.EPSILON) * 100) / 100).toFixed(2));
}

solution(param);
