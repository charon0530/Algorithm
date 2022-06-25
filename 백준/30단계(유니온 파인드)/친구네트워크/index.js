var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    let lineIdx = 1;
    let str = "";
    for (let i = 0; i < N; i++) {
        const M = Number(input[lineIdx++]);
        const info = {}; // user:[parentName,size]

        function setUnion(a, b) {
            if (a === b) return info[a][1];
            const [aParentName, aSize] = info[a];
            const [bParentName, bSize] = info[b];
            info[a] = [b, aSize + bSize];
            info[b] = [b, aSize + bSize];
            return aSize + bSize;
        }
        function setFind(name) {
            let root = name;

            while (root !== info[root][0]) {
                root = info[root][0];
            }
            const rootSize = info[root][1];

            let target = name;
            while (target !== info[target][0]) {
                let temp = target;
                target = info[target][0];
                info[temp] = [root, rootSize];
            }
            return root;
        }
        for (let j = 0; j < M; j++) {
            const [from, to] = input[lineIdx++].split(" ");
            if (info[from] === undefined) {
                info[from] = [from, 1];
            }
            if (info[to] === undefined) {
                info[to] = [to, 1];
            }
            const val = setUnion(setFind(from), setFind(to));
            str += val + "\n";
        }
    }
    console.log(str);
}

solution(param);
