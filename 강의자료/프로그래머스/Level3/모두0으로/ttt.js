function solution(a, edges) {
    if (a.reduce((a, b) => a + b) !== 0) return -1;
    const tree = new Array(a.length).fill().map((_) => []);

    for (const [u, v] of edges) {
        tree[u].push(v);
        tree[v].push(u);
    }
    let sum = 0;
    const dfs = (start, prev) => {
        for (const next of tree[start]) {
            if (next === prev) continue;
            dfs(next, start);
        }

        sum += Math.abs(a[start]);
        console.log(sum);
        a[prev] += a[start];
    };

    dfs(1, -1);
    return a[1] ? -1 : sum;
}

console.log(
    solution(
        [-5, 0, 2, 1, 2],
        [
            [0, 1],
            [3, 4],
            [2, 3],
            [0, 3],
        ]
    )
);
