function solution(n, build_frame) {
    var answer = [];
    const board = Array.from({ length: n + 1 }, () =>
        Array.from({ length: n + 1 }, () => new Array())
    );

    function IsPossible(x_pos, y_pos, type, temp_board) {
        if (type === 0) {
            // type => 0 => 기둥
            if (y_pos === 0) return true;
            else if (y_pos - 1 >= 0 && temp_board[x_pos][y_pos - 1].includes(0))
                return true;
            else if (x_pos - 1 >= 0 && temp_board[x_pos - 1][y_pos].includes(1))
                return true;
            else if (temp_board[x_pos][y_pos].includes(1)) return true;
            else return false;
        } else if (type === 1) {
            if (y_pos - 1 >= 0 && temp_board[x_pos][y_pos - 1].includes(0))
                return true;
            //왼쪽기둥
            else if (
                y_pos - 1 >= 0 &&
                temp_board[x_pos + 1][y_pos - 1].includes(0)
            )
                return true;
            // 오른쪽기둥
            else if (
                x_pos - 1 >= 0 &&
                temp_board[x_pos - 1][y_pos].includes(1) &&
                temp_board[x_pos + 1][y_pos].includes(1)
            )
                // 양쪽 보
                return true;
            else return false;
        }
    }
    function IsPossibleDel(x_pos, y_pos, type) {
        const temp_board = board.map((position) =>
            position.map((types) => types.slice())
        );
        let temp_idx = temp_board[x_pos][y_pos].findIndex((el) => el === type);
        temp_board[x_pos][y_pos].splice(temp_idx, 1);

        if (type === 0) {
            // 기둥
            if (x_pos - 1 >= 0) {
                for (let t of temp_board[x_pos - 1][y_pos + 1]) {
                    if (
                        IsPossible(x_pos - 1, y_pos + 1, t, temp_board) ===
                        false
                    )
                        return false;
                }
            }

            for (let t of temp_board[x_pos][y_pos + 1]) {
                if (IsPossible(x_pos, y_pos + 1, t, temp_board) === false)
                    return false;
            }
            return true;
        } else if (type === 1) {
            for (let t of temp_board[x_pos][y_pos]) {
                if (IsPossible(x_pos, y_pos, t, temp_board) === false)
                    return false;
            }
            for (let t of temp_board[x_pos + 1][y_pos]) {
                if (IsPossible(x_pos + 1, y_pos, t, temp_board) === false)
                    return false;
            }
            if (x_pos - 1 >= 0) {
                for (let t of temp_board[x_pos - 1][y_pos]) {
                    if (IsPossible(x_pos - 1, y_pos, t, temp_board) === false)
                        return false;
                }
            }

            return true;
        }
    }

    build_frame.forEach((frame) => {
        let [x, y, type, build] = frame;
        if (build === 1) {
            //설치
            if (IsPossible(x, y, type, board)) {
                board[x][y].push(type);
            }
        } else if (build === 0) {
            if (IsPossibleDel(x, y, type)) {
                let idx = board[x][y].findIndex((el) => el === type);
                board[x][y].splice(idx, 1);
            }
        }
    });
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            for (let k = 0; k < board[i][j].length; k++) {
                answer.push([i, j, board[i][j][k]]);
            }
        }
    }
    answer.sort((a, b) => {
        if (a[0] === b[0] && a[1] === b[1]) {
            return a[2] - b[2];
        }
        if (a[0] === b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    return answer;
}

console.log(
    solution(5, [
        [1, 0, 0, 1],
        [1, 1, 1, 1],
        [2, 1, 0, 1],
        [2, 2, 1, 1],
        [5, 0, 0, 1],
        [5, 1, 0, 1],
        [4, 2, 1, 1],
        [3, 2, 1, 1],
    ])
);
