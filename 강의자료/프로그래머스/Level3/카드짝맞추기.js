// 이 방법은 틀렸음! 순열을 구해서 점과 점 사이의 거리를 구해야함.
"use strict";
function solution(board, r, c) {
    var answer = Number.MAX_SAFE_INTEGER;
    const BOARD_LENGTH = 4;
    let chlist = Array.from({ length: BOARD_LENGTH }, () =>
        new Array(BOARD_LENGTH).fill(0)
    );
    function canGo(y, x, i) {
        // up 0 right 1 down 2 left 3
        if (i === 0) {
            for (let next_y = y - 1; next_y >= 0; next_y--) {
                if (next_y === -1) return [-1, -1];
                if (board[next_y][x] !== 0) return [next_y, x];
            }
            return [0, x];
        }
        if (i === 1) {
            for (let next_x = x + 1; next_x < BOARD_LENGTH; next_x++) {
                if (next_x === BOARD_LENGTH) return [-1, -1];

                if (board[y][next_x] !== 0) return [y, next_x];
            }
            return [y, BOARD_LENGTH];
        }
        if (i === 2) {
            for (let next_y = y + 1; next_y < BOARD_LENGTH; next_y++) {
                if (next_y === BOARD_LENGTH) return [-1, -1];
                if (board[next_y][x] !== 0) return [next_y, x];
            }
            return [BOARD_LENGTH, x];
        }
        if (i === 3) {
            for (let next_x = x - 1; next_x >= 0; next_x--) {
                if (next_x === -1) return [-1, -1];

                if (board[y][next_x] !== 0) return [y, next_x];
            }
            return [y, 0];
        }
    }
    function DFS(y, x, board, times, remain, cur_target, dir) {
        if (answer < times) return;
        if (remain === 0) {
            answer = Math.min(answer, times);
        } else {
            console.log(y, x);
            console.table(board);
            for (let i = 0; i < 4; i++) {
                if (i === (dir + 2) % 2) continue;
                let [next_y, next_x] = canGo(y, x, i);

                if (
                    next_x < 0 ||
                    next_x >= BOARD_LENGTH ||
                    next_y < 0 ||
                    next_y >= BOARD_LENGTH
                )
                    continue;
                //if (chlist[next_y][next_x] === 1) continue;

                chlist[next_y][next_x] = 1;
                if (cur_target !== 0 && cur_target === board[next_y][next_x]) {
                    let temp_board = board.map((line) => line.slice());
                    temp_board[y][x] = 0;
                    temp_board[next_y][next_x] = 0;
                    DFS(
                        next_y,
                        next_x,
                        temp_board,
                        times + 2,
                        remain - 2,
                        0,
                        i
                    );
                } else {
                    let temp_board = board.map((line) => line.slice());
                    if (cur_target === 0) {
                        cur_target = board[y][x];
                    }
                    DFS(
                        next_y,
                        next_x,
                        temp_board,
                        times + 1,
                        remain,
                        cur_target,
                        i
                    );
                }
                chlist[next_y][next_x] = 0;
            }
        }
    }
    let remain = board.reduce(
        (acc, val) => acc + val.filter((x) => x > 0).length,
        0
    );
    console.log(remain);
    DFS(r, c, board, 0, remain, board[r][c], 2);
    return answer;
}

console.log(
    solution(
        [
            [1, 0, 0, 3],
            [2, 0, 0, 0],
            [0, 0, 0, 2],
            [3, 0, 1, 0],
        ],
        1,
        0
    )
);
