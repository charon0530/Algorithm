// 나중에 답 올라오면 풀어보자
// 결과가 나오는 최소 최대 움직임 수는 구했지만 답은 안나옴
function getNext(board, pos) {
    let result = [];
    const [y, x] = pos;
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];

    for (let i = 0; i < 4; i++) {
        let n_y = y + dy[i];
        let n_x = x + dx[i];
        if (n_y < 0 || n_y >= board.length || n_x < 0 || n_x >= board[0].length)
            continue;

        if (board[n_y][n_x] === 0) continue;

        result.push([n_y, n_x]);
    }
    return result;
}
function solution(board, aloc, bloc) {
    const whoWin = [];

    function DFS(temp_board = [[]], a_pos, b_pos, turn, times) {
        if (turn === "a") {
            if (getNext(temp_board, a_pos).length === 0) {
                whoWin.push(["B", times]);
                return;
            }
            if (a_pos[0] === b_pos[0] && a_pos[1] === b_pos[1]) {
                whoWin.push(["A", times + 1]);
                return;
            }
            whoWin.push(["D", times]);
            for (let next of getNext(temp_board, a_pos)) {
                let copy_board = temp_board.map((line) => line.slice());
                copy_board[a_pos[0]][a_pos[1]] = 0;
                DFS(copy_board, next, b_pos, "b", times + 1);
            }
        } else {
            if (getNext(temp_board, b_pos).length === 0) {
                whoWin.push(["A", times]);
                return;
            }
            if (a_pos[0] === b_pos[0] && a_pos[1] === b_pos[1]) {
                whoWin.push(["B", times + 1]);
                return;
            }
            whoWin.push(["D", times]);
            for (let next of getNext(temp_board, b_pos)) {
                let copy_board = temp_board.map((line) => line.slice());
                copy_board[b_pos[0]][b_pos[1]] = 0;
                DFS(copy_board, a_pos, next, "a", times + 1);
            }
        }
    }
    DFS(board, aloc, bloc, "a", 0);
    whoWin.sort((a, b) => a[1] - b[1]);

    const dictionary = whoWin.reduce((acc, cur) => {
        const [who, times] = cur;
        if (acc[times] === undefined) {
            acc[times] = [who];
        } else {
            acc[times].push(who);
        }
        return acc;
    }, {});
    console.log(dictionary);

    for (let times of Object.keys(dictionary)
        .map((x) => Number(x))
        .sort((a, b) => a - b)) {
        const winlist = dictionary[times];
        if (winlist.every((x) => x === winlist[0])) return times;
    }
}

console.log(
    solution(
        [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1],
        ],
        [1, 0],
        [1, 2]
    )
);
