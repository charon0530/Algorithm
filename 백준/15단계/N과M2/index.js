// var fs = require("fs");
// var param = fs
//     .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
//     .toString()
//     .split("\n");

// function solution(input) {
//     const [N, M] = input[0].split(" ").map(Number);

//     const box = new Array(M).fill(null);
//     const ch = new Array(N).fill(0);
//     const result = [];
//     function DFS(boxIdx) {
//         if (boxIdx === box.length) {
//             result.push([...box]);
//         } else {
//             for (let i = 1; i <= N; i++) {
//                 if (ch[i] === 1) continue;
//                 if (boxIdx >= 1 && box[boxIdx - 1] >= i) continue;
//                 ch[i] = 1;
//                 box[boxIdx] = i;
//                 DFS(boxIdx + 1);
//                 ch[i] = 0;
//             }
//         }
//     }
//     DFS(0, 1);
//     const strList = result.map((x) => x.join(" "));
//     console.log(strList.join("\n"));
// }

// solution(param);

var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);

    const box = new Array(M).fill(null);
    const result = [];
    function DFS(boxIdx, startNum) {
        if (boxIdx === box.length) {
            result.push([...box]);
        } else {
            for (let i = startNum; i <= N; i++) {
                box[boxIdx] = i;
                DFS(boxIdx + 1, i + 1);
            }
        }
    }
    DFS(0, 1);
    const strList = result.map((x) => x.join(" "));
    console.log(strList.join("\n"));
}

solution(param);
