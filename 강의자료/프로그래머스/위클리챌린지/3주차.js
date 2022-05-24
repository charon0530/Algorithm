function solution(game_board, table) {
    var answer = 0;
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[0].length; j++) {
            if (table[i][j] === 1) table[i][j] = 0;
            else if (table[i][j] === 0) table[i][j] = 1;
        }
    }

    const game_board_dic = {};
    const table_dic = {};
    let count = 1;
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];

    function rotate(target) {
        const row_size = target.length;
        const col_size = target[0].length;
        const result = Array.from({ length: col_size }, () =>
            new Array(row_size).fill(0)
        );

        for (let i = 0; i < target.length; i++) {
            for (let j = 0; j < target[0].length; j++) {
                result[j][result[0].length - 1 - i] = target[i][j];
            }
        }
        return result;
    }
    function cut(target) {
        const result = [];
        let min_r = target.length;
        let max_r = -1;
        let min_c = target.length;
        let max_c = -1;

        for (let i = 0; i < target.length; i++) {
            for (let j = 0; j < target.length; j++) {
                if (target[i][j] === 1) {
                    min_r = Math.min(min_r, i);
                    max_r = Math.max(max_r, i);
                    min_c = Math.min(min_c, j);
                    max_c = Math.max(max_c, j);
                }
            }
        }
        for (let i = min_r; i <= max_r; i++) {
            result.push(target[i].slice(min_c, max_c + 1));
        }
        return result;
    }
    function DFS(r, c, tmp_board) {
        game_board[r][c] = 1;
        tmp_board[r][c] = 1;
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            if (
                nr >= 0 &&
                nr < game_board.length &&
                nc >= 0 &&
                nc < game_board.length &&
                game_board[nr][nc] === 0
            ) {
                DFS(nr, nc, tmp_board);
            }
        }
    }

    for (let i = 0; i < game_board.length; i++) {
        for (let j = 0; j < game_board.length; j++) {
            if (game_board[i][j] === 1) continue;
            const board = Array.from({ length: game_board.length }, () =>
                new Array(game_board.length).fill(0)
            );

            DFS(i, j, board);
            const cut_board = cut(board);
            game_board_dic[count++] = cut_board;
        }
    }
    game_board = table;

    for (let i = 0; i < game_board.length; i++) {
        for (let j = 0; j < game_board.length; j++) {
            if (game_board[i][j] === 1) continue;
            const board = Array.from({ length: game_board.length }, () =>
                new Array(game_board.length).fill(0)
            );

            DFS(i, j, board);
            const cut_board = cut(board);
            table_dic[count++] = cut_board;
        }
    }
    let ch = new Array(count + 1).fill(0);
    for (let std of Object.values(table_dic)) {
        let flag = 0;
        for (let [key, comp] of Object.entries(game_board_dic)) {
            if (ch[key] === 1) continue;
            for (let i = 0; i < 4; i++) {
                comp = rotate(comp);
                if (JSON.stringify(std) === JSON.stringify(comp)) {
                    answer += JSON.stringify(std)
                        .split("")
                        .filter((x) => x === "1").length;
                    flag = 1;
                    ch[key] = 1;
                    break;
                }
            }
            if (flag === 1) break;
        }
    }
    console.log(game_board_dic);
    console.log(table_dic);
    console.log(ch);

    return answer;
}

console.log(
    solution(
        [
            [1, 1, 0, 0, 1, 0],
            [0, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 0, 1],
            [1, 1, 0, 1, 1, 1],
            [1, 0, 0, 0, 1, 0],
            [0, 1, 1, 1, 0, 0],
        ],
        [
            [1, 0, 0, 1, 1, 0],
            [1, 0, 1, 0, 1, 0],
            [0, 1, 1, 0, 1, 1],
            [0, 0, 1, 0, 0, 0],
            [1, 1, 0, 1, 1, 0],
            [0, 1, 0, 0, 0, 0],
        ]
    )
);
