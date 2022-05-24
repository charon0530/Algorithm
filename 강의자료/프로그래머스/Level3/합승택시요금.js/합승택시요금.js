function solution(n, s, a, b, fares) {
    //Dijkstra
    let graph = Array.from({ length: n + 1 }, () => new Array());
    fares.forEach((fare) => {
        let [s, e, cost] = fare;
        graph[s].push([e, cost]);
        graph[e].push([s, cost]);
    });

    function Dijkstra(start) {
        let cost_map = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
        let visited = new Array(n + 1).fill(0);
        let parent = new Array(n + 1).fill(-1);

        parent[start] = start;
        cost_map[start] = 0;

        while (true) {
            let closest = Number.MAX_SAFE_INTEGER;
            let now = -1;
            for (let i = 1; i <= n; i++) {
                if (visited[i] === 1) continue;
                if (cost_map[i] === Number.MAX_SAFE_INTEGER) continue;
                if (cost_map[i] >= closest) continue;

                closest = cost_map[i];
                now = i;
            }

            if (now === -1) break;

            visited[now] = 1;
            for (let [next, cost] of graph[now]) {
                if (visited[next] === 1) continue;

                let newCost = cost_map[now] + cost;
                if (newCost < cost_map[next]) {
                    cost_map[next] = newCost;
                    parent[next] = now;
                }
            }
        }
        return cost_map;
    }
    let sum_cost = Number.MAX_SAFE_INTEGER;
    let cost_s = Dijkstra(s);
    for (let i = 1; i <= n; i++) {
        let new_cost_s = Dijkstra(i);
        let new_sum = cost_s[i] + new_cost_s[a] + new_cost_s[b];
        if (new_sum < sum_cost) sum_cost = new_sum;
    }
    console.log(sum_cost);
}
console.log(
    solution(6, 4, 6, 2, [
        [4, 1, 10],
        [3, 5, 24],
        [5, 6, 2],
        [3, 1, 41],
        [5, 1, 24],
        [4, 6, 50],
        [2, 4, 66],
        [2, 3, 22],
        [1, 6, 25],
    ])
);
