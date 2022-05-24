function solution(n, path, order) {
    var answer = true;

    const key_dic = new Map();
    const lock_dic = new Map();
    const visited = new Array(n).fill(0);
    const visited_result = new Array(n).fill(0);
    order.forEach((od) => {
        let [k, l] = od;
        key_dic.set(k, l);
        lock_dic.set(l, 1);
    });
    const tree = Array.from({ length: n }, () => new Array());

    path.forEach((p) => {
        let [s, e] = p;
        tree[s].push(e);
        tree[e].push(s);
    });
    if (lock_dic.get(0) !== undefined) return false;

    // console.log(key_dic);
    // console.log(lock_dic);
    // console.log(tree);

    function DFS(node) {
        for (let next of tree[node]) {
            if (visited[next] === 1) continue;
            if (lock_dic.get(next) === 1) continue;

            if (key_dic.get(next) !== undefined) {
                lock_dic.set(key_dic.get(next), undefined);
            }
            visited[next] = 1;
            visited_result[next] = 1;

            DFS(next);
            visited[next] = 0;
        }
    }

    let before_str = "";
    while (true) {
        visited_result.fill(0);
        visited[0] = 1;
        if (key_dic.get(0) !== undefined) {
            lock_dic.set(key_dic.get(0), undefined);
        }
        DFS(0);
        let str = visited_result.join("");
        if (str === before_str) break;
        else {
            before_str = str;
        }
    }
    visited_result[0] = 1;
    console.log(visited_result);
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
