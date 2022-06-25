var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const M = Number(input[1]);
    const parent = new Array(N).fill(null);
    for (let i = 0; i < N; i++) {
        parent[i] = i;
    }

    function setUnion(a, b) {
        parent[a] = b;
    }

    function setFind(num) {
        let root = num;
        while (root !== parent[root]) {
            root = parent[root];
        }
        let el = num;
        while (el !== parent[el]) {
            let temp = el;
            el = parent[el];
            parent[temp] = root;
        }
        return root;
    }
    let lineIdx = 2;
    for (let i = 0; i < N; i++) {
        const line = input[lineIdx++].split(" ").map(Number);
        for (let j = 0; j < line.length; j++) {
            if (line[j] === 1) {
                setUnion(setFind(i), setFind(j));
            }
        }
    }
    const pathList = input[lineIdx]
        .split(" ")
        .slice(0, M)
        .map((x) => setFind([Number(x - 1)]));
    console.log(pathList.every((x) => x === pathList[0]) ? "YES" : "NO");
}

solution(param);
