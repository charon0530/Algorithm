//DFS를 너무 많이돔... 못풀겠다 ㅠㅠ solution 부분 BFS로 바꾸면 할만할듯 BUT 어차피 시험에서 못품
//정답률 0.95%
"use strict";
const BOARD_LENGTH = 4;
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];
function GetDictionary(board) {
    let dictionary = {};
    for (let i = 0; i < BOARD_LENGTH; i++) {
        for (let j = 0; j < BOARD_LENGTH; j++) {
            if (board[i][j] === 0) continue;
            if (dictionary[board[i][j]] === undefined) {
                dictionary[board[i][j]] = [[i, j]];
            } else {
                dictionary[board[i][j]].push([i, j]);
            }
        }
    }
    return dictionary;
}

function GetPermutation(dic) {
    let result = [];
    let keys = Object.keys(dic);
    let chlist = new Array(keys.length).fill(0);
    let temp = new Array(keys.length).fill(0);
    function DFS(box_idx) {
        if (box_idx === keys.length) {
            result.push([...temp]);
        } else {
            for (let i = 0; i < keys.length; i++) {
                if (chlist[i] === 1) continue;
                chlist[i] = 1;
                temp[box_idx] = Number(keys[i]);
                DFS(box_idx + 1);
                chlist[i] = 0;
            }
        }
    }
    DFS(0);
    return result;
}

function combinedFunc(dic, permutation, start) {
    let result = [];
    for (let i = 0; i < permutation.length; i++) {
        let order = permutation[i];
        function DFS(pick_idx, temp_arr) {
            if (pick_idx === order.length) {
                result.push([...temp_arr]);
            } else {
                temp_arr.push(dic[order[pick_idx]][0]);
                temp_arr.push(dic[order[pick_idx]][1]);

                DFS(pick_idx + 1, [...temp_arr]);
                temp_arr.pop();
                temp_arr.pop();
                temp_arr.push(dic[order[pick_idx]][1]);
                temp_arr.push(dic[order[pick_idx]][0]);

                DFS(pick_idx + 1, [...temp_arr]);
            }
        }
        DFS(0, [start]);
    }
    return result;
}

function solution(board, r, c) {
    let result = Number.MAX_SAFE_INTEGER;
    let answer = 0;
    let tmp_answer = Number.MAX_SAFE_INTEGER;
    let dic = GetDictionary(board);
    let permutation = GetPermutation(dic);
    let ordersList = [
        [
            [1, 0],
            [1, 0],
            [2, 3],
            [0, 3],
            [3, 0],
            [3, 2],
            [0, 0],
        ],
    ]; //combinedFunc(dic, permutation, [r, c]);
    console.log(dic);
    console.log(permutation);
    console.log(ordersList);

    let chlist = Array.from({ length: BOARD_LENGTH }, () =>
        new Array(BOARD_LENGTH).fill(0)
    );
    function canGo(y, x, i, board) {
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
            return [y, BOARD_LENGTH - 1];
        }
        if (i === 2) {
            for (let next_y = y + 1; next_y < BOARD_LENGTH; next_y++) {
                if (next_y === BOARD_LENGTH) return [-1, -1];
                if (board[next_y][x] !== 0) return [next_y, x];
            }
            return [BOARD_LENGTH - 1, x];
        }
        if (i === 3) {
            for (let next_x = x - 1; next_x >= 0; next_x--) {
                if (next_x === -1) return [-1, -1];

                if (board[y][next_x] !== 0) return [y, next_x];
            }
            return [y, 0];
        }
    }
    function DFS(cur_y, cur_x, end_y, end_x, times, edit_board, path) {
        if (tmp_answer < times) return;
        if (end_y === cur_y && end_x === cur_x) {
            if (tmp_answer > times) {
                tmp_answer = times;
                //console.log(path);
            }
        } else {
            for (let i = 0; i < 4; i++) {
                let next_y = cur_y + dy[i];
                let next_x = cur_x + dx[i];

                if (
                    next_x < 0 ||
                    next_x >= BOARD_LENGTH ||
                    next_y < 0 ||
                    next_y >= BOARD_LENGTH
                )
                    continue;

                if (chlist[next_y][next_x] === 1) continue;

                chlist[next_y][next_x] = 1;
                path.push([next_y, next_x]);
                DFS(next_y, next_x, end_y, end_x, times + 1, edit_board, [
                    ...path,
                ]);
                path.pop();
                chlist[next_y][next_x] = 0;
            }

            for (let i = 0; i < 4; i++) {
                let [next_y, next_x] = canGo(cur_y, cur_x, i, edit_board);

                if (
                    next_x < 0 ||
                    next_x >= BOARD_LENGTH ||
                    next_y < 0 ||
                    next_y >= BOARD_LENGTH
                )
                    continue;
                if (chlist[next_y][next_x] === 1) continue;

                chlist[next_y][next_x] = 1;
                path.push([next_y, next_x]);
                DFS(next_y, next_x, end_y, end_x, times + 1, edit_board, [
                    ...path,
                ]);
                path.pop();
                chlist[next_y][next_x] = 0;
            }
        }
    }

    for (let i = 0; i < ordersList.length; i++) {
        // TODO i <ordersList.length
        let temp_board = board.map((line) => line.slice());
        let orders = ordersList[i];
        let answer = 0;
        //console.log(orders);
        for (let j = 0; j < orders.length - 1; j++) {
            tmp_answer = Number.MAX_SAFE_INTEGER;
            //console.table(temp_board);

            DFS(
                orders[j][0],
                orders[j][1],
                orders[j + 1][0],
                orders[j + 1][1],
                0,
                temp_board,
                [[orders[j][0], orders[j][1]]]
            );

            if (j % 2 === 1) {
                temp_board[orders[j][0]][orders[j][1]] = 0;
                temp_board[orders[j + 1][0]][orders[j + 1][1]] = 0;
                tmp_answer += 2;
            }

            console.log("tmp answer = ", tmp_answer);
            console.table(temp_board);
            answer += tmp_answer;
            // console.log("answer is ", answer);
            // console.log("=======================================");
        }
        result = Math.min(result, answer);
    }
    return result;
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
