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

    let total = 0;
    function DFS(node, path) {
        if (false) {
        } else {
            for (let next of graph[node]) {
                if (ch[next] === 1) continue;
                ch[next] = 1;
                DFS(next, path);
                //ch[next] = 0;     // Tree 는 안풀어줘도 됨!
                total += Math.abs(a[next]);
                a[node] += a[next];
            }
        }
    }
    ch[0] = 1;
    DFS(0, []);

    return total;
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
