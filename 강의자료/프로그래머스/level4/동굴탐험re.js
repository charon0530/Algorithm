// 야매 풀이법 : 트리 순환 순서를 반대로 뒤집어서 접근하면 효율성 마지막 문제 통과됨 ㅋㅋ
// 이런 종류의 문제들은 DFS를 여러 번 돌리는 것으로 해결한다.
function solution(n, path, order) {
    let flag = false;
    const key_dic = {};
    const lock_dic = {};
    const visited = new Array(n).fill(0);
    const visited_result = new Array(n).fill(0);
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

    function DFS(node) {
        for (let next of tree[node]) {
            if (visited[next] === 1) continue;
            if (lock_dic[next] === 1) continue;

            if (key_dic[next] !== undefined) {
                lock_dic[key_dic[next]] = undefined;
            }
            visited[next] = 1;
            if (visited_result[next] !== 1) {
                visited_result[next] = 1;
                flag = true;
            }
            DFS(next);
            visited[next] = 0;
        }
    }
    if (key_dic[0] !== undefined) {
        lock_dic[key_dic[0]] = undefined;
    }
    while (true) {
        flag = false;
        visited[0] = 1;

        DFS(0);
        if (flag === false) break;
    }
    visited_result[0] = 1;
    return visited_result.every((x) => x === 1);
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
            [4, 1],
            [8, 7],
            [6, 5],
        ]
    )
);
