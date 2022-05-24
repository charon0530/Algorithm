function solution(board) {
    let answer = Number.MAX_SAFE_INTEGER;
    const N = board.length;
    const ch = Array.from({ length: N }, () => new Array(N).fill(0));
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];
    const DIR = ["U", "R", "D", "L"];
    const memo = Array.from({ length: N }, () =>
        Array.from({ length: N }, () =>
            new Array(2).fill(Number.MAX_SAFE_INTEGER)
        )
    );
    function DFS(cur_y, cur_x, cost, dir) {
        if (
            memo[cur_y][cur_x][dir] !== Number.MAX_SAFE_INTEGER &&
            memo[cur_y][cur_x][dir] < cost
        )
            return;
        memo[cur_y][cur_x][dir] = cost;

        if (cur_y === N - 1 && cur_x === N - 1) {
            if (cost < answer) {
                answer = cost;
            }
        } else {
            for (let i = 0; i < 4; i++) {
                const n_y = cur_y + dy[i];
                const n_x = cur_x + dx[i];
                const n_d = DIR[i];

                if (
                    n_y < 0 ||
                    n_y >= N ||
                    n_x < 0 ||
                    n_x >= N ||
                    board[n_y][n_x] === 1
                )
                    continue;

                if (ch[n_y][n_x] === 1) continue;

                ch[n_y][n_x] = 1;
                if (dir === n_d) {
                    DFS(n_y, n_x, cost + 100, n_d);
                } else {
                    DFS(n_y, n_x, cost + 600, n_d);
                }
                ch[n_y][n_x] = 0;
            }
        }
    }
    DFS(0, 0, 0, "NONE");
    console.log(answer - 500);
}
console.log(
    solution([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ])
);
