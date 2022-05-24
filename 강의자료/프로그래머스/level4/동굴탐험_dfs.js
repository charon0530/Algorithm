// 맞긴 한데 시간 초과 남
// => 경로를 신경 쓰지 않아도 되기 때문에 이렇게 구현하지 않아도 됨
// 양과 늑대 문제와 비교
function solution(n, path, order) {
    var answer = false;
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

    // console.log(key_dic);
    // console.log(lock_dic);
    // console.log(tree);

    function DFS(node, branch = new Set(), visited) {
        if (visited.every((x) => x === 1)) answer = true;

        for (let next of branch) {
            if (visited[next] === 1) continue;
            if (lock_dic[next] !== undefined) continue;
            if (key_dic[next] !== undefined)
                lock_dic[key_dic[next]] = undefined;
            let temp_branch = new Set(branch);
            temp_branch.delete(next);
            for (let n of tree[next]) {
                temp_branch.add(n);
            }
            visited[next] = 1;
            DFS(next, temp_branch, [...visited]);
            visited[next] = 0;
        }
    }
    visited[0] = 1;
    const set = new Set();
    for (let next of tree[0]) {
        set.add(next);
    }
    DFS(0, set, visited);

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
            [4, 1],
            [8, 7],
            [6, 5],
        ]
    )
);
