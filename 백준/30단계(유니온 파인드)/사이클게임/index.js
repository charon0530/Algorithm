var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    let inputIdx = 1;
    const parent = new Array(N);
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
            const temp = el;
            el = parent[el];
            parent[temp] = root;
        }
        return root;
    }
    for (let i = 0; i < M; i++) {
        const [from, to] = input[inputIdx++].split(" ").map(Number);
        const first = setFind(from);
        const second = setFind(to);
        if (first === second) {
            console.log(i + 1);
            return;
        } else {
            setUnion(first, second);
        }
    }
    console.log(0);
}

solution(param);
