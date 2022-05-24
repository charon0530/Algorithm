//시간초과
//DFS에서 가지를 뻗을 수 있는지를 확인하며 뻗는다. (즉, 뻗을 때 작업한 결과물을 같이 보내줘야 함.)
function solution(n) {
    let answer = 0;
    function DFS(row, col, points) {
        if (points.length === n) {
            answer++;
        } else {
            for (let i = 0; i < n; i++) {
                if (!isValid(row + 1, i, points)) continue;
                DFS(row + 1, i, [...points, [row + 1, i]]);
            }
        }
    }

    function isValid(row, col, points) {
        for (let i = 0; i < points.length; i++) {
            const [p_row, p_col] = points[i];
            if (
                p_row === row ||
                p_col === col ||
                Math.abs(p_row - row) === Math.abs(p_col - col)
            ) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < n; i++) {
        DFS(0, i, [[0, i]]);
    }
    return answer;
}

console.log(solution(1));
