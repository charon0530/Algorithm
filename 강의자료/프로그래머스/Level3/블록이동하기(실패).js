function solution(board) {
    var answer = Number.MAX_SAFE_INTEGER;
    const visited = Array.from({ length: board.length }, () =>
        Array.from({ length: board.length }, () => new Array(2).fill(0))
    );
    visited[0][0][0] = 1;
    visited[0][1][0] = 1;

    const dirs = [
        [0, 1, 0, 1], // right
        [-1, 0, -1, 0], //up
        [0, -1, 0, -1], //left
        [1, 0, 1, 0], // down
    ];

    function DFS(robot, sum, pos) {
        let [r1, c1, r2, c2] = robot;

        if (
            (r1 === board.length - 1 && c1 === board.length - 1) ||
            (r2 === board.length - 1 && c2 === board.length - 1)
        ) {
            answer = Math.min(answer, sum);
            return;
        } else {
            const temp_dirs = [...dirs];
            if (c1 < c2) {
                //[b1][b2]

                temp_dirs.push([0, 0, -1, -1, "check_up"]);
                temp_dirs.push([0, 0, 1, -1, "check_down"]);
                temp_dirs.push([-1, 1, 0, 0, "check_up"]);
                temp_dirs.push([1, 1, 0, 0, "check_down"]);
            } else if (c1 > c2) {
                //[b2][b1]

                temp_dirs.push([0, 0, -1, 1, "check_up"]);
                temp_dirs.push([0, 0, 1, 1, "check_down"]);
                temp_dirs.push([-1, -1, 0, 0, "check_up"]);
                temp_dirs.push([1, -1, 0, 0, "check_down"]);
            } else if (r1 > r2) {
                //[b2]
                //[b1]

                temp_dirs.push([0, 0, 1, 1, "check_right"]);
                temp_dirs.push([0, 0, 1, -1, "check_left"]);
                temp_dirs.push([-1, 1, 0, 0, "check_right"]);
                temp_dirs.push([-1, -1, 0, 0, "check_left"]);
            } else if (r1 < r2) {
                temp_dirs.push([0, 0, -1, 1, "check_right"]);
                temp_dirs.push([0, 0, -1, -1, "check_left"]);
                temp_dirs.push([1, 1, 0, 0, "check_right"]);
                temp_dirs.push([1, -1, 0, 0, "check_left"]);
            }
            for (let [r1v, c1v, r2v, c2v, hint] of temp_dirs) {
                let temp_pos = pos;
                if (hint === "check_right" || hint === "check_left")
                    temp_pos = "-";
                if (hint === "check_up" || hint === "check_down")
                    temp_pos = "l";
                let [nr1, nc1, nr2, nc2] = [
                    robot[0] + r1v,
                    robot[1] + c1v,
                    robot[2] + r2v,
                    robot[3] + c2v,
                ];
                if (
                    hint === "check_right" &&
                    c1 + 1 < board.length &&
                    c2 + 1 < board.length &&
                    (board[r1][c1 + 1] === 1 || board[r1][c2 + 1] === 1)
                )
                    continue;
                if (
                    hint === "check_left" &&
                    c1 - 1 > 0 &&
                    c2 - 1 > 0 &&
                    (board[r1][c1 + -1] === 1 || board[r1][c2 + -1] === 1)
                )
                    continue;
                if (
                    hint === "check_down" &&
                    r1 + 1 < board.length &&
                    r1 + 1 < board.length &&
                    (board[r1 + 1][c1] === 1 || board[r1 + 1][c2] === 1)
                )
                    continue;
                if (
                    hint === "check_up" &&
                    r1 - 1 > 0 &&
                    r2 - 1 > 0 &&
                    (board[r1 - 1][c1] === 1 || board[r1 - 1][c2] === 1)
                )
                    continue;
                if (
                    nr1 < 0 ||
                    nr1 > board.length - 1 ||
                    nc1 < 0 ||
                    nc1 > board.length - 1 ||
                    nr2 < 0 ||
                    nr2 > board.length - 1 ||
                    nc2 < 0 ||
                    nc2 > board.length - 1
                )
                    continue;
                if (board[nr1][nc1] === 1 || board[nr2][nc2] === 1) continue;
                if (temp_pos === "-") {
                    if (
                        visited[nr1][nc1][0] === 1 &&
                        visited[nr2][nc2][0] === 1
                    )
                        continue;

                    let flag1 = false;
                    let flag2 = false;
                    if (visited[nr1][nc1][0] === 0) flag1 = true;
                    if (visited[nr2][nc2][0] === 0) flag2 = true;
                    visited[nr1][nc1][0] = 1;
                    visited[nr2][nc2][0] = 1;
                    DFS([nr1, nc1, nr2, nc2], sum + 1, temp_pos);
                    if (flag1) visited[nr1][nc1][0] = 0;
                    if (flag2) visited[nr2][nc2][0] = 0;
                } else if (temp_pos === "l") {
                    if (
                        visited[nr1][nc1][1] === 1 &&
                        visited[nr2][nc2][1] === 1
                    )
                        continue;
                    let flag1 = false;
                    let flag2 = false;
                    if (visited[nr1][nc1][1] === 0) flag1 = true;
                    if (visited[nr2][nc2][1] === 0) flag2 = true;
                    visited[nr1][nc1][1] = 1;
                    visited[nr2][nc2][1] = 1;
                    DFS([nr1, nc1, nr2, nc2], sum + 1, temp_pos);
                    if (flag1) visited[nr1][nc1][1] = 0;
                    if (flag2) visited[nr2][nc2][1] = 0;
                }
            }
        }
    }
    DFS([0, 0, 0, 1], 0, "-");
    return answer;
}

console.log(
    solution([
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 0],
        [0, 1, 0, 1, 1],
        [1, 1, 0, 0, 1],
        [0, 0, 0, 0, 0],
    ])
);
