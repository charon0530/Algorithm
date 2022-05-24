function solution(n, s, a, b, fares) {
    let answer = Number.MAX_SAFE_INTEGER;
    const graph = Array.from({ length: n + 1 }, () => new Array());
    fares.forEach((fare) => {
        const [s, e, cost] = fare;
        graph[s].push([e, cost]);
        graph[e].push([s, cost]);
    });

    function Dijkstra(start) {
        const visited = new Array(n + 1).fill(0);
        const dist = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

        dist[start] = 0;

        while (true) {
            let idx = -1;
            let min_dist = Number.MAX_SAFE_INTEGER;

            for (let i = 1; i <= n; i++) {
                if (visited[i] === 1) continue;
                if (dist[i] === Number.MAX_SAFE_INTEGER) continue;
                if (min_dist > dist[i]) {
                    min_dist = dist[i];
                    idx = i;
                }
            }
            if (idx === -1) break;

            visited[idx] = 1;
            for (let [next, cost] of graph[idx]) {
                if (visited[next] === 1) continue;

                let new_dist = dist[idx] + cost;
                if (new_dist < dist[next]) {
                    dist[next] = new_dist;
                }
            }
        }
        return dist;
    }

    const start_node_dist = Dijkstra(s);

    for (let i = 1; i <= n; i++) {
        const end_node_dist = Dijkstra(i);

        const a_dist = end_node_dist[a];
        const b_dist = end_node_dist[b];

        answer = Math.min(answer, start_node_dist[i] + a_dist + b_dist);
    }
    return answer;
}

console.log(
    solution(7, 3, 4, 1, [
        [5, 7, 9],
        [4, 6, 4],
        [3, 6, 1],
        [3, 2, 3],
        [2, 1, 6],
    ])
);
