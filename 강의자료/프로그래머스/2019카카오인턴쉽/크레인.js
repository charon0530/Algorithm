function solution(board, moves) {
    let answer = 0;
    const N = board.length;
    const stack = [];
    moves.forEach((col) => {
        col--;

        for (let i = 0; i < N; i++) {
            if (board[i][col] === 0) continue;

            stack.push(board[i][col]);
            board[i][col] = 0;
            break;
        }

        if (stack.length >= 2) {
            if (stack[stack.length - 1] === stack[stack.length - 2]) {
                answer += 2;
                stack.pop();
                stack.pop();
            }
        }
    });
    return answer;
}

console.log(
    solution(
        [
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 3],
            [0, 2, 5, 0, 1],
            [4, 2, 4, 4, 2],
            [3, 5, 1, 3, 1],
        ],
        [1, 5, 3, 5, 1, 2, 1, 4]
    )
);
