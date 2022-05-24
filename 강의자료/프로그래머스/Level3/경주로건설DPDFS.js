// 정확하게는 메모이제이션 + DFS
// DP + DFS 는 return 을 사용함 ex)외판원 순회 문제
// 둘의 차이점은 메모이제이션만 사용할 때에는 가지치기를 위한 것으로 방향이 루트에서 리프방향
// 메모이제이션을 이용해서 DP를 사용할 때에는 아랫단에서 정해진 것을 사용함으로 리프에서 루트방향
// 즉, 가장 큰 차이점은 방향이다! (only memo // root -> leaf)(memo + DP // leaf -> root)
function solution(board) {
    var answer = Number.MAX_SAFE_INTEGER;
    let n = board.length;
    //right down left up
    let dir = [
        [1, 0, "down"],
        [0, -1, "left"],
        [-1, 0, "up"],
        [0, 1, "right"],
    ];
    let ch = Array.from({ length: n }, () => new Array(n).fill(0));
    let dp = Array.from({ length: n }, () =>
        Array.from({ length: n }, () =>
            new Array(4).fill(Number.MAX_SAFE_INTEGER)
        )
    );
    function DFS(row, col, cost_sum, cur_dir) {
        if (
            dp[row][col][cur_dir] !== Number.MAX_SAFE_INTEGER &&
            dp[row][col][cur_dir] < cost_sum
        )
            return;
        dp[row][col][cur_dir] = cost_sum;

        if (cost_sum >= answer) return;
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
                if (board[n_row][n_col] === 1) continue;
                if (ch[n_row][n_col] === 1) continue;

                ch[n_row][n_col] = 1;
                if (cur_dir === next[2]) {
                    DFS(n_row, n_col, cost_sum + 100, next[2]);
                } else {
                    DFS(n_row, n_col, cost_sum + 600, next[2]);
                }
                ch[n_row][n_col] = 0;
            }
        }
    }

    ch[0][0] = 1;
    DFS(0, 0, 0, "");
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
console.log(
    solution([
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 1, 1, 0],
        [1, 0, 0, 1, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 1, 1, 0],
    ])
);
