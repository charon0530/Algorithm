//프림알고리즘

function solution(n, costs) {
    let answer = 0;
    const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    const visited = new Array(n).fill(0);
    const graph = Array.from({ length: n }, () => []);

    costs.forEach((x) => {
        const [s, e, cost] = x;
        graph[s].push([e, cost]);
        graph[e].push([s, cost]);
    });

    dist[0] = 0;

    while (true) {
        let idx = -1;
        let min_val = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < n; i++) {
            if (visited[i] === 1) continue;
            if (dist[i] === Number.MAX_SAFE_INTEGER) continue;
            if (min_val > dist[i]) {
                idx = i;
                min_val = dist[i];
            }
        }
        if (idx === -1) break;

        visited[idx] = 1;
        answer += dist[idx];

        for (let [next, cost] of graph[idx]) {
            if (visited[next] === 1) continue;
            if (cost < dist[next]) {
                dist[next] = cost;
            }
        }
    }
    return answer;
}

console.log(
    solution(4, [
        [0, 1, 1],
        [0, 2, 2],
        [1, 2, 5],
        [1, 3, 1],
        [2, 3, 8],
    ])
);
