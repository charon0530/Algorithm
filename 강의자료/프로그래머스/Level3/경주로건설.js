function solution(board) {
    var answer = Number.MAX_SAFE_INTEGER;
    let n = board.length;
    //right down left up
    let dir = [
        [0, 1, "right"],
        [1, 0, "down"],
        [0, -1, "left"],
        [-1, 0, "up"],
    ];
    let ch = Array.from({ length: n }, () => new Array(n).fill(0));
    function DFS(row, col, cost_sum, cur_dir, path) {
        if (cost_sum > answer) return;
        if (row === n - 1 && col === n - 1) {
            if (cost_sum < answer) {
                answer = cost_sum;
            }
        } else {
            for (let next of dir) {
                let n_row = row + next[0];
                let n_col = col + next[1];

                if (n_row < 0 || n_row >= n || n_col < 0 || n_col >= n)
                    continue;
                if (ch[n_row][n_col] === 1) continue;
                if (board[n_row][n_col] === 1) continue;

                ch[n_row][n_col] = 1;
                path.push([n_row, n_col]);
                if (cur_dir === next[2]) {
                    DFS(n_row, n_col, cost_sum + 100, next[2], path);
                } else {
                    DFS(n_row, n_col, cost_sum + 600, next[2], path);
                }
                ch[n_row][n_col] = 0;
                path.pop();
            }
        }
    }

    ch[0][0] = 1;
    DFS(0, 0, 0, "", []);
    return answer - 500;
}

console.log(
    solution([
        [0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
        [0, 0, 1, 0, 1, 1, 0, 1, 0, 1],
        [0, 1, 0, 0, 1, 0, 0, 0, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    ])
);
