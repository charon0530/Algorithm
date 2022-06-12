var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);

    const box = new Array(M).fill(null);

    const result = [];
    function DFS(boxIdx) {
        if (boxIdx === box.length) {
            result.push([...box]);
        } else {
            for (let i = 1; i <= N; i++) {
                box[boxIdx] = i;
                DFS(boxIdx + 1);
            }
        }
    }
    DFS(0, 1);
    const strList = result.map((x) => x.join(" "));
    console.log(strList.join("\n"));
}

solution(param);
