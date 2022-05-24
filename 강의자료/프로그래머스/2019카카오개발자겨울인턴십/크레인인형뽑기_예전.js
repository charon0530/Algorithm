function solution(board, moves) {
    var answer = 0;
    let box = [];
    moves.forEach((col) => {
        let col_idx = col - 1;
        let temp = -1;

        for (let row_idx = 0; row_idx < board.length; row_idx++) {
            if (board[row_idx][col_idx] === 0) continue;

            temp = board[row_idx][col_idx];
            board[row_idx][col_idx] = 0;
            break;
        }

        if (temp !== -1) {
            if (box[box.length - 1] === temp) {
                box.pop();
                answer += 2;
            } else {
                box.push(temp);
            }
        }
    });
    return answer;
}
