//조건이 많긴한데 주먹구식으로만들면 통과는함

function GetNextPos(left_pos, right_pos, pos, board) {
    const result = [];
    const dy = [-1, 0, 1, 0];
    const dx = [0, 1, 0, -1];

    //up right down left
    for (let i = 0; i < 4; i++) {
        const [n_l_y, n_l_x] = [left_pos[0] + dy[i], left_pos[1] + dx[i]];
        const [n_r_y, n_r_x] = [right_pos[0] + dy[i], right_pos[1] + dx[i]];

        if (
            n_l_y < 0 ||
            n_l_y >= board.length ||
            n_r_y < 0 ||
            n_r_y >= board.length ||
            n_l_x < 0 ||
            n_l_x >= board.length ||
            n_r_x < 0 ||
            n_r_x >= board.length
        )
            continue;

        if (board[n_l_y][n_l_x] === 1 || board[n_r_y][n_r_x] === 1) continue;

        result.push([[n_l_y, n_l_x], [n_r_y, n_r_x], pos]);
    }

    //가로일때
    if (pos === 0) {
        //왼쪽을 기준으로 회전
        //위 아래
        const dy = [-1, 1];
        const dx = [-1, -1];

        for (let i = 0; i < 2; i++) {
            const n_l_y = left_pos[0];
            const n_l_x = left_pos[1];

            const n_r_y = right_pos[0] + dy[i];
            const n_r_x = right_pos[1] + dx[i];

            if (
                n_l_y < 0 ||
                n_l_y >= board.length ||
                n_r_y < 0 ||
                n_r_y >= board.length ||
                n_l_x < 0 ||
                n_l_x >= board.length ||
                n_r_x < 0 ||
                n_r_x >= board.length
            )
                continue;

            if (board[n_l_y][n_l_x] === 1 || board[n_r_y][n_r_x] === 1)
                continue;
            result.push([[n_l_y, n_l_x], [n_r_y, n_r_x], 1]);
        }
    } else {
        //오른쪽 기준
        // 위 아래
        const dy = [-1, 1];
        const dx = [1, 1];

        for (let i = 0; i < 2; i++) {
            const n_l_y = left_pos[0] + dy[i];
            const n_l_x = left_pos[1] + dx[i];

            const n_r_y = right_pos[0];
            const n_r_x = right_pos[1];

            if (
                n_l_y < 0 ||
                n_l_y >= board.length ||
                n_r_y < 0 ||
                n_r_y >= board.length ||
                n_l_x < 0 ||
                n_l_x >= board.length ||
                n_r_x < 0 ||
                n_r_x >= board.length
            )
                continue;

            if (board[n_l_y][n_l_x] === 1 || board[n_r_y][n_r_x] === 1)
                continue;
            result.push([[n_l_y, n_l_x], [n_r_y, n_r_x], 0]);
        }
    }
    return result;
}

function solution(board) {
    //BFS
    const start_pos = [[0, 0], [0, 1], 0];
    const queue = [start_pos];
    const ch = new Set();
    ch.add("0,0,0,1");

    while (queue) {
        const [cur_l, cur_r, pos] = queue.shift();

        for (let next of GetNextPos(cur_l, cur_r, pos, board)) {
            const [n_l, n_r, n_pos] = next;
            const ch_key = `${n_l[0]},${n_l[1]},${n_r[0]},${n_r[1]}`;
            if (ch.has(ch_key)) continue;

            ch.add(ch_key);
            queue.push([n_l, n_r, n_pos]);
        }
    }
}
