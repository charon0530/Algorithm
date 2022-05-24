function solution(board, skill) {
    var answer = 0;
    const acc_board = Array.from({ length: board.length + 1 }, () =>
        new Array(board[0].length + 1).fill(0)
    );

    skill.forEach((sk) => {
        const [type, r1, c1, r2, c2, degree] = sk;
        const num = type === 1 ? -degree : degree;
        acc_board[r1][c1] += num;
        acc_board[r2 + 1][c1] += -num;
        acc_board[r1][c2 + 1] += -num;
        acc_board[r2 + 1][c2 + 1] += num;
    });

    for (let i = 0; i < acc_board.length; i++) {
        for (let j = 1; j < acc_board[0].length; j++) {
            acc_board[i][j] += acc_board[i][j - 1];
        }
    }

    for (let i = 1; i < acc_board.length; i++) {
        for (let j = 0; j < acc_board[0].length; j++) {
            acc_board[i][j] += acc_board[i - 1][j];
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            acc_board[i][j] += board[i][j];
            if (acc_board[i][j] > 0) answer++;
        }
    }
    console.table(acc_board);
    return answer;
}
console.log(
    solution(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        [
            [1, 1, 1, 2, 2, 4],
            [1, 0, 0, 1, 1, 2],
            [2, 2, 0, 2, 0, 100],
        ]
    )
);
