function solution(n, s, a, b, fares) {
    //Dijkstra
    // 1. 방문했는가?
    // 2. 갈 수 있는가?
    // 3. 갱신
    // " cost_map(=dist)를 사용하거나, 힙 자료구조를 이용한다. 둘 중 택 1 "

    // graph 이용!

    let graph = Array.from({ length: n + 1 }, () => new Array());
    let cost_map = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    let visited = new Array(n + 1).fill(0);
    let parent = new Array(n + 1).fill(-1);

    fares.forEach((fare) => {
        let [s, e, cost] = fare;
        graph[s].push([e, cost]);
        graph[e].push([s, cost]);
    });

    parent[s] = s;
    cost_map[s] = 0;

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

        visited[now] = 1; // BFS는 체크 Dijkstra는 visited
        for (let [next, cost] of graph[now]) {
            if (visited[next] === 1) continue;

            let newCost = cost_map[now] + cost;
            if (newCost < cost_map[next]) {
                cost_map[next] = newCost;
                parent[next] = now;
            }
        }
    }

    let a_path = [];
    let b_path = [];
    while (true) {
        if (parent[a] === a) break;
        a_path.push(a);
        a = parent[a];
    }
    while (true) {
        if (parent[b] === b) break;
        b_path.push(b);
        b = parent[b];
    }
    console.log(cost_map);
    console.log(a_path);
    console.log(b_path);
}
console.log(
    solution(6, 4, 6, 2, [
        [4, 1, 100],
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
