function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(0);

    function DFS(cur_node) {
        for (let i = 0; i < n; i++) {
            if (visited[i] === 1) continue;
            if (computers[cur_node][i] === 0) continue;
            visited[i] = 1;
            DFS(i);
        }
    }

    for (let i = 0; i < n; i++) {
        if (visited[i] === 1) continue;

        answer++;
        visited[i] = 1;
        DFS(i);
    }
    return answer;
}

console.log(
    solution(3, [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
    ])
);
