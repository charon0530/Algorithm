// 단순 완전 탐색
// 이러한 문제의 유형은 방향을 고려해야한다! 특히 진입 방향에 따라 바뀌는 경우 "진입 방향"을 따져준다!

function solution(grid) {
    let answer = [];
    const directions = ["U", "R", "D", "L"];
    grid = grid.map((x) => x.split(""));
    const row_len = grid.length;
    const col_len = grid[0].length;
    let ch = Array.from({ length: row_len }, () =>
        Array.from({ length: col_len }, () => {
            return { U: 0, R: 0, D: 0, L: 0 };
        })
    );

    for (let i = 0; i < row_len; i++) {
        for (let j = 0; j < col_len; j++) {
            for (let k = 0; k < 4; k++) {
                let count = 0;
                const init_dir = directions[k]; //진입할때의 바라보는방향
                let pos = [i, j];
                let dir = init_dir;
                if (ch[i][j][dir] === 1) continue;

                while (true) {
                    if (pos[0] === i && pos[1] === j) {
                        if (ch[i][j][dir] === 1) {
                            answer.push(count);
                            break;
                        }
                    }
                    ch[pos[0]][pos[1]][dir] = 1;

                    if (grid[pos[0]][pos[1]] === "S") {
                        if (dir === "U") {
                            pos[0] -= 1;
                        } else if (dir === "R") {
                            pos[1] += 1;
                        } else if (dir === "D") {
                            pos[0] += 1;
                        } else if (dir === "L") {
                            pos[1] -= 1;
                        }
                    } else if (grid[pos[0]][pos[1]] === "R") {
                        if (dir === "U") {
                            pos[1] += 1;
                            dir = "R";
                        } else if (dir === "R") {
                            pos[0] += 1;
                            dir = "D";
                        } else if (dir === "D") {
                            pos[1] -= 1;
                            dir = "L";
                        } else if (dir === "L") {
                            pos[0] -= 1;
                            dir = "U";
                        }
                    } else if (grid[pos[0]][pos[1]] === "L") {
                        if (dir === "U") {
                            pos[1] -= 1;
                            dir = "L";
                        } else if (dir === "R") {
                            pos[0] -= 1;
                            dir = "U";
                        } else if (dir === "D") {
                            pos[1] += 1;
                            dir = "R";
                        } else if (dir === "L") {
                            pos[0] += 1;
                            dir = "D";
                        }
                    }
                    count++;

                    if (pos[0] < 0) pos[0] += row_len;
                    if (pos[0] >= row_len) pos[0] %= row_len;
                    if (pos[1] < 0) pos[1] += col_len;
                    if (pos[1] >= col_len) pos[1] %= col_len;
                }
            }
        }
    }

    return answer.filter((x) => x).sort((a, b) => a - b);
}

console.log(solution(["SL", "LR"]));
