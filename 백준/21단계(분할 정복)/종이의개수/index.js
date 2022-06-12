var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

function solution(input) {
    const N = Number(input[0]);
    const board = new Array(N);
    for (let i = 1; i <= N; i++) {
        board[i - 1] = input[i].split(" ");
    }
    //console.table(board);

    let nCount = 0;
    let zCount = 0;
    let pCount = 0;
    function DFS(sr, sc, er, ec) {
        let checkVal = board[sr][sc];
        let flag = true;
        outer: for (let i = sr; i <= er; i++) {
            for (let j = sc; j <= ec; j++) {
                if (checkVal !== board[i][j]) {
                    flag = false;
                    break outer;
                }
            }
        }
        if (flag) {
            if (checkVal === "-1") {
                nCount++;
                return;
            } else if (checkVal === "0") {
                zCount++;
                return;
            } else {
                pCount++;
                return;
            }
        } else {
            // for (let i = 0; i < 9; i++) {
            //     const divCount = (er - sr + 1) / 3;
            //     const rowOffset = sr + parseInt(i / 3) * divCount;
            //     const colOffset = sc + (i % 3) * divCount;

            //     DFS(
            //         rowOffset,
            //         colOffset,
            //         rowOffset + divCount - 1,
            //         colOffset + divCount - 1
            //     );
            // }
            const divCount = (er - sr + 1) / 3;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    DFS(
                        sr + divCount * i,
                        sc + divCount * j,
                        sr + divCount * i + divCount - 1,
                        sc + divCount * j + divCount - 1
                    );
                }
            }
        }
    }
    DFS(0, 0, N - 1, N - 1);
    // console.log(nCount);
    // console.log(zCount);
    // console.log(pCount);
    console.log(nCount + "\n" + zCount + "\n" + pCount);
}

solution(param);
