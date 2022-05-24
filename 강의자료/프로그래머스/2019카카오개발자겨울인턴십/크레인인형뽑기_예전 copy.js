function solution(board, moves) {
    let answer = 0;
    const stack = [];
    moves.forEach((col) => {
        col = col - 1;
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] === 0) continue;
            else {
                stack.push(board[row][col]);
                board[row][col] = 0;
                break;
            }
        }
        if (stack.length >= 2) {
            if (stack[stack.length - 1] === stack[stack.length - 2]) {
                stack.pop();
                stack.pop();
                answer += 2;
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
