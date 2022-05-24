function solution(rows, columns, queries) {
    let answer = [];
    const board = Array.from({ length: rows }, () => new Array(columns));

    let num = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            board[i][j] = num++;
        }
    }

    queries.forEach((q) => {
        let min = rows * columns + 1;
        const [s_r, s_c, e_r, e_c] = q.map((x) => x - 1);

        let saved_list = [];
        for (let i = s_c; i <= e_c; i++) {
            min = Math.min(min, board[s_r][i]);
            saved_list.push(board[s_r][i]);
        }
        for (let i = s_r + 1; i <= e_r; i++) {
            min = Math.min(min, board[i][e_c]);
            saved_list.push(board[i][e_c]);
        }
        for (let i = e_c - 1; i >= s_c; i--) {
            min = Math.min(min, board[e_r][i]);
            saved_list.push(board[e_r][i]);
        }
        for (let i = e_r - 1; i >= s_r + 1; i--) {
            min = Math.min(min, board[i][s_c]);
            saved_list.push(board[i][s_c]);
        }
        saved_list.unshift(saved_list.pop());
        for (let i = s_c; i <= e_c; i++) {
            board[s_r][i] = saved_list.shift();
        }
        for (let i = s_r + 1; i <= e_r; i++) {
            board[i][e_c] = saved_list.shift();
        }
        for (let i = e_c - 1; i >= s_c; i--) {
            board[e_r][i] = saved_list.shift();
        }
        for (let i = e_r - 1; i >= s_r + 1; i--) {
            board[i][s_c] = saved_list.shift();
        }
        answer.push(min);
    });
    return answer;
}

console.log(
    solution(6, 6, [
        [2, 2, 5, 4],
        [3, 3, 6, 6],
        [5, 1, 6, 3],
    ])
);
