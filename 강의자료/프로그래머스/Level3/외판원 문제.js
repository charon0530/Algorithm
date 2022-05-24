function solution(n, arr) {
    let N = n;
    let w = arr.map((line) => line.slice());
    // 방문 상태가 visited 일 때 node에서 도착지까지 걸리는 최소 비용
    let dp = Array.from({ length: N }, () => new Array(1 << 16).fill(0));

    function DFS(node, visited) {
        if (dp[node][visited] !== 0) return dp[node][visited];
        if (visited === (1 << N) - 1) {
            if (w[node][0] !== 0) return w[node][0];
            else return Number.MAX_SAFE_INTEGER;
        } else {
            let result = Number.MAX_SAFE_INTEGER;
            for (let i = 0; i < N; i++) {
                if (visited & (1 << i)) continue;
                if (w[node][i] === 0) continue;
                result = Math.min(
                    result,
                    w[node][i] + DFS(i, visited | (1 << i))
                );
            }
            dp[node][visited] = result;
            return result;
        }
    }
    return DFS(0, 1);
}

console.log(
    solution(4, [
        [0, 10, 15, 20],
        [5, 0, 9, 10],
        [6, 13, 0, 12],
        [8, 8, 9, 0],
    ])
);
