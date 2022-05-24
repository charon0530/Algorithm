// 갈 수 있는 경로(뻗어나갈 수 있는 경로)를 잘 생각해야 한다.
// 왔다 갔다 하는 것은 이 문제처럼 풀 수 있다.
// 이 문제는 경로가 중요함! BUT lv4의 동굴 탐험은 경로가 중요하지 않다!
function solution(info, edges) {
    var answer = 0;
    const tree = Array.from({ length: info.length }, () => new Array());
    edges.forEach((edge) => {
        const [s, e] = edge;
        tree[s].push(e);
    });

    function DFS(node, lamb_count, wolf_count, defer_set = new Set()) {
        if (lamb_count <= wolf_count) return;
        answer = Math.max(answer, lamb_count);
        for (let next of defer_set) {
            let temp_set = new Set(defer_set);
            temp_set.delete(next);
            for (let n of tree[next]) {
                temp_set.add(n);
            }
            if (info[next] === 0) {
                DFS(next, lamb_count + 1, wolf_count, temp_set);
            } else {
                DFS(next, lamb_count, wolf_count + 1, temp_set);
            }
        }
    }

    const set = new Set();
    for (let next of tree[0]) {
        set.add(next);
    }
    DFS(0, 1, 0, set);
    return answer;
}

console.log(
    solution(
        [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
        [
            [0, 1],
            [1, 2],
            [1, 4],
            [0, 8],
            [8, 7],
            [9, 10],
            [9, 11],
            [4, 3],
            [6, 5],
            [4, 6],
            [8, 9],
        ]
    )
);
