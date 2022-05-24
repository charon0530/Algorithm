function InitDic(board) {
    const dic = {};
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] !== 0) {
                const block_num = board[i][j];
                if (dic[block_num] === undefined) {
                    dic[block_num] = {};
                    dic[block_num].start_pos = [i, j];
                    dic[block_num].end_pos = [i, j];
                } else {
                    if (dic[block_num].start_pos[1] > j) {
                        dic[block_num].start_pos[1] = j;
                    }
                    if (dic[block_num].end_pos[0] < i) {
                        dic[block_num].end_pos[0] = i;
                    }
                    if (dic[block_num].end_pos[1] < j) {
                        dic[block_num].end_pos[1] = j;
                    }
                }
            }
        }
    }
    return dic;
}

function FillBoard(board) {
    for (let col = 0; col < board.length; col++) {
        for (let row = 0; row < board.length; row++) {
            if (board[row][col] !== 0 && board[row][col] !== "*") break;
            board[row][col] = "*";
        }
    }
}
function solution(board) {
    var answer = 0;
    const dic = InitDic(board);

    FillBoard(board);

    while (true) {
        let removed_num = [];
        for (let b_num in dic) {
            let isRemoved = true;
            let [s_y, s_x] = dic[b_num].start_pos;
            let [e_y, e_x] = dic[b_num].end_pos;

            for (let i = s_y; i <= e_y; i++) {
                for (let j = s_x; j <= e_x; j++) {
                    if (board[i][j] !== Number(b_num) && board[i][j] !== "*") {
                        isRemoved = false;
                        i = e_y + 1;
                        j = e_x + 1;
                    }
                }
            }
            if (isRemoved) {
                removed_num.push(b_num);

                for (let i = s_y; i <= e_y; i++) {
                    for (let j = s_x; j <= e_x; j++) {
                        board[i][j] = 0;
                    }
                }
                FillBoard(board);
            }
        }
        removed_num.forEach((x) => delete dic[x]);
        console.table(board);
        console.log(removed_num);
        answer += removed_num.length;
        if (removed_num.length === 0) break;
    }
    return answer;
}

console.log(
    solution([
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
        [0, 0, 0, 0, 0, 4, 4, 0, 0, 0],
        [0, 0, 0, 0, 3, 0, 4, 0, 0, 0],
        [0, 0, 0, 2, 3, 0, 0, 0, 5, 5],
        [1, 2, 2, 2, 3, 3, 0, 0, 0, 5],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 5],
    ])
);
