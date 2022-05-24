function solution(N, results) {
    let answer = 0;
    const graph = Array.from({ length: N + 1 }, () => new Array());
    const rev_graph = Array.from({ length: N + 1 }, () => new Array());

    results.forEach((result) => {
        const [win, lose] = result;
        graph[lose].push(win);
        rev_graph[win].push(lose);
    });

    for (let i = 1; i <= N; i++) {
        const visited = new Array(N + 1).fill(0);
        visited[0] = 1;

        function DFS(cur_node) {
            for (let next of graph[cur_node]) {
                if (visited[next] === 1) continue;

                visited[next] = 1;
                DFS(next);
            }
        }

        function REV_DFS(cur_node) {
            for (let next of rev_graph[cur_node]) {
                if (visited[next] === 1) continue;

                visited[next] = 1;
                REV_DFS(next);
            }
        }
        visited[i] = 1;
        DFS(i);
        REV_DFS(i);
        if (visited.every((x) => x === 1)) answer++;
    }
    return answer;
}

console.log(
    solution(5, [
        [4, 3],
        [4, 2],
        [3, 2],
        [1, 2],
        [2, 5],
    ])
);
