var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [n, m] = input[0].split(" ").map(Number);
    let inputIdx = 1;
    let str = "";

    const parent = new Array(n + 1).fill(null).map((val, idx) => idx);

    function setUnion(a, b) {
        parent[a] = b;
    }
    function setFind(num) {
        let root = num;
        while (parent[root] !== root) {
            root = parent[root];
        }
        let el = num;
        while (parent[el] !== el) {
            let savedEl = el;
            el = parent[el];
            parent[savedEl] = root;
        }
        return root;
    }

    for (let i = 0; i < m; i++) {
        const [c, a, b] = input[inputIdx++].split(" ").map(Number);
        if (c === 0) {
            setUnion(setFind(a), setFind(b));
        } else {
            str += setFind(a) === setFind(b) ? "YES\n" : "NO\n";
        }
    }
    console.log(str);
}

solution(param);
