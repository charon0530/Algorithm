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
    function DFS(temp_board = [[]], a_pos, b_pos, turn) {
        if (turn === "a") {
            const nextPath = getNext(temp_board, a_pos);

            if (nextPath.length === 0) return ["b", 0];
            if (a_pos[0] === b_pos[0] && a_pos[1] === b_pos[1]) {
                return ["a", 1];
            } else {
                let minTimes = Number.MAX_SAFE_INTEGER;
                let maxTimes = 0;
                let hasGodhand = false;
                for (let next of nextPath) {
                    const copy_board = temp_board.map((line) => line.slice());

                    copy_board[a_pos[0]][a_pos[1]] = 0;
                    const [whowin, times] = DFS(copy_board, next, b_pos, "b");

                    if (whowin === "a") {
                        hasGodhand = true;
                        minTimes = Math.min(minTimes, times);
                    } else {
                        maxTimes = Math.max(maxTimes, times);
                    }
                }
                if (hasGodhand) return ["a", minTimes + 1];
                else return ["b", maxTimes + 1];
            }
        } else {
            const nextPath = getNext(temp_board, b_pos);

            if (nextPath.length === 0) return ["a", 0];
            if (a_pos[0] === b_pos[0] && a_pos[1] === b_pos[1]) {
                return ["b", 1];
            } else {
                let minTimes = Number.MAX_SAFE_INTEGER;
                let maxTimes = 0;
                let hasGodhand = false;
                for (let next of nextPath) {
                    const copy_board = temp_board.map((line) => line.slice());

                    copy_board[b_pos[0]][b_pos[1]] = 0;
                    const [whowin, times] = DFS(copy_board, a_pos, next, "a");

                    if (whowin === "b") {
                        hasGodhand = true;
                        minTimes = Math.min(minTimes, times);
                    } else {
                        maxTimes = Math.max(maxTimes, times);
                    }
                }
                if (hasGodhand) return ["b", minTimes + 1];
                else return ["a", maxTimes + 1];
            }
        }
    }
    const [winner, answer] = DFS(board, aloc, bloc, "a");
    return answer;
}

console.log(
    solution(
        [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ],
        [1, 0],
        [1, 2]
    )
);
