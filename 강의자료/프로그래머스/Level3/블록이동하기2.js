// Board 유형 같은 값이 있다면 인덱스를 초과하지 않기 위해서 패딩을 주는것이 좋다!
// Why? -> 인덱스가 유효한지 판단하지 않아도 된다.

// TIP! : BFS는 큐에 들어간 것을 "체크" Dijkstra는 진짜 방문한 것을 visited
function solution(board) {
    let answer;
    const goal = `${board.length - 1},${board.length - 1}`;
    const ch = new Set();
    const queue = [];
    queue.push([[0, 0], [0, 1], 0]);
    ch.add(`0,0,0,1`);

    // 이 부분이 패딩을 주는 코드

    // const N = board.length;
    // const new_board = new Array(N + 2)
    //     .fill()
    //     .map((_) => new Array(N + 2).fill(1));
    // for (let i = 0; i < N; i++) {
    //     for (let j = 0; j < N; j++) {
    //         new_board[i + 1][j + 1] = board[i][j];
    //     }
    // }
    // console.log(new_board);

    while (queue) {
        let [left, right, count] = queue.shift();

        let nextPositions = getNextPostion(left, right);
        for (let [next_left, next_right] of nextPositions) {
            if (next_left.join(",") === goal || next_right.join(",") === goal)
                return count + 1;

            let key = `${next_left[0]},${next_left[1]},${next_right[0]},${next_right[1]}`;
            if (ch.has(key)) continue;

            ch.add(key);
            queue.push([next_left, next_right, count + 1]);
        }
    }

    function getNextPostion(left, right) {
        let positions = []; // [left,right]
        let moves = [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ]; //right down left up

        for (let [dy, dx] of moves) {
            let next_left = [left[0] + dy, left[1] + dx];
            let next_right = [right[0] + dy, right[1] + dx];

            if (
                next_left[0] < 0 ||
                next_left[0] > board.length - 1 ||
                next_left[1] < 0 ||
                next_left[1] > board.length - 1 ||
                next_right[0] < 0 ||
                next_right[0] > board.length - 1 ||
                next_right[1] < 0 ||
                next_right[1] > board.length - 1
            )
                continue;

            if (
                board[next_left[0]][next_left[1]] === 0 &&
                board[next_right[0]][next_right[1]] === 0
            )
                positions.push([next_left, next_right]);

            const toward = [-1, 1];
            if (left[0] === right[0]) {
                // 가로
                for (const dy of toward) {
                    let new_right = [left[0] + dy, left[1]];
                    let new_left = [right[0] + dy, right[1]];
                    if (
                        new_right[0] >= 0 &&
                        new_right[0] < board.length &&
                        board[new_right[0]][new_right[1]] === 0 &&
                        new_left[0] >= 0 &&
                        new_left[0] < board.length &&
                        board[new_left[0]][new_left[1]] === 0
                    ) {
                        positions.push([new_left, right]);
                        positions.push([left, new_right]);
                    }
                }
            } else {
                for (const dx of toward) {
                    let new_right = [left[0], left[1] + dx];
                    let new_left = [right[0], right[1] + dx];
                    if (
                        new_right[1] >= 0 &&
                        new_right[1] < board.length &&
                        board[new_right[0]][new_right[1]] === 0 &&
                        new_left[1] >= 0 &&
                        new_left[1] < board.length &&
                        board[new_left[0]][new_left[1]] === 0
                    ) {
                        positions.push([new_left, right]);
                        positions.push([left, new_right]);
                    }
                }
            }
        }
        return positions;
    }

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
