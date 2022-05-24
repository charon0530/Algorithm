//시간초과

//DFS에서 가지를 뻗기 전에 확인하는 방식으로 구현해보았음 (즉, 현재 노드를 작업하고 확인한 후 가지를 뻗는다.)
function solution(n) {
    var answer = new Set();
    const init_board = Array.from({ length: n }, () => new Array(n).fill(0));

    function DFS(node_pos, board, q_count, points) {
        //현재노드 작업
        const temp_board = board.map((line) => line.slice());
        const [row, col] = node_pos;
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                const row_gap = Math.abs(i - row);
                const col_gap = Math.abs(j - col);
                if (row_gap === col_gap) temp_board[i][j] = 1;
                if (i === row || j === col) temp_board[i][j] = 1;
            }
        }
        points.push([row, col]);
        //확인
        if (q_count + 1 === n) {
            console.log(points);
            return;
        }
        // 가지뻗기
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                if (temp_board[i][j] === 1) continue;
                DFS([i, j], temp_board, q_count + 1, [...points]);
            }
        }
    }
    let ch = [];
    for (let i = 0; i < init_board.length; i++) {
        for (let j = 0; j < init_board.length; j++) {
            if (!ch.includes([i, j].join(","))) {
                DFS([i, j], init_board, 0, []);
                ch.push([i, j].join(","));
            }
        }
    }
    return answer.size;
}

console.log(solution(4));
