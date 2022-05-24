// 이 방법은 콜스택 오버플로우가 발생한다.
function solution(n, path, order) {
    let answer = false;
    const key_dic = {};
    const lock_dic = {};
    const visited = new Array(n).fill(0);

    order.forEach((od) => {
        let [k, l] = od;
        key_dic[k] = l;
        lock_dic[l] = 1;
    });
    const tree = Array.from({ length: n }, () => new Array());

    path.forEach((p) => {
        let [s, e] = p;
        tree[s].push(e);
        tree[e].push(s);
    });
    if (lock_dic[0] !== undefined) return false;

    const defer_set = new Set();

    function DFS(node, visited) {
        if (visited.every((x) => x === 1)) answer = true;

        for (let next of tree[node]) {
            if (visited[next] === 1) continue;

            if (lock_dic[next] !== undefined) {
                defer_set.add(next);
                continue;
            }

            if (key_dic[next] !== undefined) {
                lock_dic[key_dic[next]] = undefined;
                if (defer_set.has(key_dic[next])) {
                    defer_set.delete(key_dic[next]);
                    visited[key_dic[next]] = 1;
                    DFS(key_dic[next], visited);
                }
            }
            visited[next] = 1;
            DFS(next, visited);
        }
    }
    visited[0] = 1;
    if (key_dic[0] !== undefined) {
        lock_dic[key_dic[0]] = undefined;
    }
    DFS(0, visited);

    return answer;
}
console.log(
    solution(
        2,
        [
            [0, 1],
            [1, 0],
        ],
        [[0, 1]]
    )
);
