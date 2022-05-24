//DFS를 너무 많이돔... 못풀겠다 ㅠㅠ solution 부분 BFS로 바꾸면 할만할듯 BUT 어차피 시험에서 못품
//정답률 0.95%
"use strict";
const BOARD_LENGTH = 4;

function MakeDictionary(board) {
    let dictionary = {};
    for (let i = 0; i < BOARD_LENGTH; i++) {
        for (let j = 0; j < BOARD_LENGTH; j++) {
            if (board[i][j] !== 0) {
                if (dictionary[board[i][j]] === undefined) {
                    dictionary[board[i][j]] = [[i, j]];
                } else {
                    dictionary[board[i][j]].push([i, j]);
                }
            }
        }
    }
    return dictionary;
}
function MakeCombination(nums = []) {
    let result = [];
    let box = new Array(nums.length).fill(-1);
    let ch = new Array(nums.length).fill(0);
    function DFS(box_idx) {
        if (box_idx === nums.length) {
            result.push([...box]);
            return;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (ch[i] === 1) continue;

                ch[i] = 1;
                box[box_idx] = Number(nums[i]);
                DFS(box_idx + 1);
                ch[i] = 0;
            }
        }
    }
    DFS(0);
    return result;
}
function MakePaths(board, r, c) {
    let result = [];
    let dictionary = MakeDictionary(board);
    let combinations = MakeCombination(Object.keys(dictionary));
    function DFS(path, idx, temp_path) {
        if (idx === path.length) {
            result.push([...temp_path]);
        } else {
            temp_path.push(dictionary[path[idx]][0]);
            temp_path.push(dictionary[path[idx]][1]);
            DFS(path, idx + 1, [...temp_path]);
            temp_path.pop();
            temp_path.pop();

            temp_path.push(dictionary[path[idx]][1]);
            temp_path.push(dictionary[path[idx]][0]);
            DFS(path, idx + 1, [...temp_path]);
            temp_path.pop();
            temp_path.pop();
        }
    }
    combinations.forEach((x) => {
        DFS(x, 0, [[r, c]]);
    });
    return result;
}
function GetNextLocations(r, c, board) {
    let result = [];
    // up right down left
    let dr = [-1, 0, 1, 0];
    let dc = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
        let nr = r + dr[i];
        let nc = c + dc[i];

        if (nr < 0 || nr >= BOARD_LENGTH || nc < 0 || nc >= BOARD_LENGTH)
            continue;
        result.push([nr, nc]);
    }
    for (let i = 0; i < 4; i++) {
        // up right down left
        if (i === 0) {
            for (let next_y = r - 1; next_y >= 0; next_y--) {
                if (board[next_y][c] !== 0) {
                    result.push([next_y, c]);
                    break;
                } else if (next_y === 0) result.push([next_y, c]);
            }
        }
        if (i === 1) {
            for (let next_x = c + 1; next_x < BOARD_LENGTH; next_x++) {
                if (board[r][next_x] !== 0) {
                    result.push([r, next_x]);
                    break;
                } else if (next_x === BOARD_LENGTH - 1)
                    result.push([r, next_x]);
            }
        }
        if (i === 2) {
            for (let next_y = r + 1; next_y < BOARD_LENGTH; next_y++) {
                if (board[next_y][c] !== 0) {
                    result.push([next_y, c]);
                    break;
                } else if (next_y === BOARD_LENGTH - 1)
                    result.push([next_y, c]);
            }
        }
        if (i === 3) {
            for (let next_x = c - 1; next_x >= 0; next_x--) {
                if (board[r][next_x] !== 0) {
                    result.push([r, next_x]);
                    break;
                } else if (next_x === 0) result.push([r, next_x]);
            }
        }
    }
    return result;
}
function BFS(board, s_r, s_c, e_r, e_c) {
    if (s_r === e_r && s_c === e_c) return 0;
    let ch = Array.from({ length: BOARD_LENGTH }, () =>
        new Array(BOARD_LENGTH).fill(0)
    );
    let dis = Array.from({ length: BOARD_LENGTH }, () =>
        new Array(BOARD_LENGTH).fill(0)
    );
    let queue = [];
    ch[s_r][s_c] = 1;
    queue.push([s_r, s_c]);

    while (queue.length) {
        let [r, c] = queue.shift();
        for (let next of GetNextLocations(r, c, board)) {
            let [nr, nc] = next;
            if (nr === e_r && nc === e_c) return dis[r][c] + 1;
            if (ch[nr][nc] === 1) continue;
            ch[nr][nc] = 1;
            dis[nr][nc] = dis[r][c] + 1;
            queue.push([nr, nc]);
        }
    }
}

function solution(board, r, c) {
    let answer = Number.MAX_SAFE_INTEGER;

    //경로만들기
    let paths = MakePaths(board, r, c);

    console.log("bos", BFS(board, 1, 0, 2, 3));
    //경로 따라 움직이기 (BFS로 길찾기)
    for (let i = 0; i < paths.length; i++) {
        let path = paths[i];
        let temp_board = board.map((line) => line.slice());
        let temp_ans = 0;
        for (let j = 0; j < path.length - 1; j++) {
            let [sr, sc, er, ec] = [
                path[j][0],
                path[j][1],
                path[j + 1][0],
                path[j + 1][1],
            ];
            let count = BFS(temp_board, sr, sc, er, ec);
            temp_ans += count;
            if (j % 2 === 1) {
                temp_ans += 2;
                temp_board[sr][sc] = 0;
                temp_board[er][ec] = 0;
            }
        }
        //최솟값 비교

        answer = Math.min(answer, temp_ans);
    }
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
