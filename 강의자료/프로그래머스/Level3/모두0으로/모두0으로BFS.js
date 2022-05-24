function solution(a, edges) {
    var answer = -2;
    let answer_list = [];
    let N = a.length;
    let dp_dic = {};
    if (a.reduce((a, b) => a + b, 0) !== 0) return -1;
    let graph = Array.from({ length: N }, () => new Array());
    edges.forEach((edge) => {
        let [s, e] = edge;
        graph[s].push(e);
        graph[e].push(s);
    });

    function BFS(start, end) {
        if (end === start) return 0;
        let visited = new Array(N).fill(0);
        let queue = [];

        visited[start] = 1;
        queue.push(start);
        let level = 0;
        while (queue) {
            let len = queue.length;
            for (let i = 0; i < len; i++) {
                let node = queue.shift();

                for (let next of graph[node]) {
                    if (next === end) return level + 1;
                    if (visited[next] === 1) continue;

                    dp_dic[node + "," + start] = level + 1;
                    dp_dic[start + "," + node] = level + 1;
                    visited[next] = 1;
                    queue.push(next);
                }
            }
            level++;
        }
    }

    for (let end = 0; end < N; end++) {
        let sum = 0;
        for (let start = 0; start < N; start++) {
            if (dp_dic[start + "," + end] !== undefined) {
                sum += Math.abs(a[start]) * dp_dic[start + "," + end];
            } else {
                console.log("call");
                sum += Math.abs(a[start]) * BFS(start, end);
            }
        }
        answer_list.push(sum);
    }
    answer = Math.min(...answer_list);
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
