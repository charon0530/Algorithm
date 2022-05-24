class MinHeap {
    constructor() {
        this.queue = [];
    }

    push(x = []) {
        this.queue.push([...x]);
        this.queue.sort((a, b) => a[1] - b[1]);
    }

    pop() {
        return this.queue.shift();
    }
    getLength() {
        return this.queue.length;
    }
}
function solution(n, start, end, roads = [[]], traps = []) {
    const graph = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    );

    roads.forEach((x) => {
        const [s, e, c] = x;
        graph[s][e] = Math.min(graph[s][e], c);
    });

    const visited = {};
    //visited[JSON.stringify(graph)] = new Array(n + 1).fill(0);

    const minHeap = new MinHeap();
    minHeap.push([start, 0, JSON.stringify(graph)]);

    while (minHeap.getLength()) {
        const [cur_node, cur_dist, cur_graph_json] = minHeap.pop();
        if (cur_node === end) return cur_dist;

        let cur_visited = visited[cur_graph_json];
        if (cur_visited === undefined) {
            visited[cur_graph_json] = new Array(n + 1).fill(0);
            cur_visited = visited[cur_graph_json];
        }
        if (cur_visited[cur_node] === 1) continue;

        cur_visited[cur_node] = 1;

        const cur_graph = JSON.parse(cur_graph_json);

        for (let i = 1; i <= n; i++) {
            const next = i;

            if (cur_graph[cur_node][i] === Number.MAX_SAFE_INTEGER) continue;

            if (traps.includes(i)) {
                const next_graph = cur_graph.map((line) => line.slice());
                for (let j = 1; j <= n; j++) {
                    const [se, es] = [next_graph[i][j], next_graph[j][i]];
                    next_graph[i][j] = es;
                    next_graph[j][i] = se;
                }
                minHeap.push([
                    next,
                    cur_dist + cur_graph[cur_node][next],
                    JSON.stringify(next_graph),
                ]);
            } else {
                minHeap.push([
                    next,
                    cur_dist + cur_graph[cur_node][next],
                    JSON.stringify(cur_graph),
                ]);
            }
        }
    }
}

console.log(
    solution(
        4,
        1,
        4,
        [
            [1, 2, 1],
            [3, 2, 1],
            [2, 4, 1],
        ],
        [2, 3]
    )
);
