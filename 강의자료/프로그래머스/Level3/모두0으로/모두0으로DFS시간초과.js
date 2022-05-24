function solution(a, edges) {
    var answer = [];
    let node_num = a.length;
    let graph = Array.from({ length: node_num }, () => new Array());
    let ch = new Array(node_num).fill(0);
    if (a.reduce((a, b) => a + b) !== 0) return -1;
    edges.forEach((edge) => {
        let [s, e] = edge;
        graph[s].push(e);
        graph[e].push(s);
    });

    let path_count = -1;
    function DFS(node, end, path, depth) {
        if (path_count !== -1) return;
        if (node === end) {
            if (path_count === -1) path_count = depth;
            else {
                path_count = depth < path_count ? depth : path_count;
            }
        } else {
            for (let next of graph[node]) {
                if (ch[next] === 1) continue;
                ch[next] = 1;
                DFS(next, end, path, depth + 1);
                ch[next] = 0;
            }
        }
    }

    for (let end = 0; end < node_num; end++) {
        let sum = 0;
        for (let start = 0; start < node_num; start++) {
            if (end === start) continue;

            path_count = -1;
            ch.fill(0);
            ch[start] = 1;
            DFS(start, end, [], 0);
            sum += path_count * Math.abs(a[start]);
        }
        answer.push(sum);
    }
    return answer;
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
