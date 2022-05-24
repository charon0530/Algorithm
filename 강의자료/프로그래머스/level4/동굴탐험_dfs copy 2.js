// 재귀 함수를 stack으로 바꾸었다.
// BFS와 마찬가지로 여기서 visited보단 checked가 더 어울린다.
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

    if (key_dic[0] !== undefined) {
        lock_dic[key_dic[0]] = undefined;
    }

    const stack = [];
    visited[0] = 1;
    stack.push(0);
    while (stack.length) {
        let node = stack.pop();
        if (visited.every((x) => x === 1)) answer = true; // return true; 가 더 좋음 why? => 실제 모든 노드를 "방문" 하지 않고, 모든 노드가 "스택에 들어갔었다면" 거기서 멈춘다.

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
                    stack.push(key_dic[next]);
                }
            }
            visited[next] = 1;
            stack.push(next);
        }
    }
    return answer;
}
console.log(
    solution(
        9,
        [
            [0, 1],
            [0, 3],
            [0, 7],
            [8, 1],
            [3, 6],
            [1, 2],
            [4, 7],
            [7, 5],
        ],
        [
            [8, 5],
            [6, 7],
            [4, 1],
        ]
    )
);
