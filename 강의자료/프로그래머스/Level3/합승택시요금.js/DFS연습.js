function solution(n, s, a, b, fares) {
    let a_path = [];

    let b_path = [];

    let visited = new Array(n + 1).fill(0);
    let graph = Array.from({ length: n + 1 }, () => new Array());
    fares.forEach((fare) => {
        let [s, e, cost] = fare;
        graph[s].push([e, cost]);
        graph[e].push([s, cost]);
    });
    function DFS(node, end, path, sum_cost) {
        if (node === end) {
            if (end === a) {
                a_path.push([...path, sum_cost]);
            }
            if (end === b) {
                b_path.push([...path, sum_cost]);
            }
        } else {
            for (let [next, cost] of graph[node]) {
                if (visited[next] === 1) continue;
                visited[next] = 1;
                path.push(next);
                DFS(next, end, path, sum_cost + cost);
                visited[next] = 0;
                path.pop();
            }
        }
    }

    DFS(s, a, [], 0);
    DFS(s, b, [], 0);
    console.log(a_path);
    console.log(b_path);
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
