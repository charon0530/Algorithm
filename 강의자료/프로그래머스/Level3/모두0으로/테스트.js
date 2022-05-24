function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array());
    let ch = Array.from({ length: n + 1 }, () => 0);
    let parent = Array.from({ length: n + 1 }, () => 0);
    let stack = [];
    let path = [];
    for (let [a, b] of arr) {
        graph[a].push(b);
    }

    console.table(graph);
    let cur_path = [];
    stack.push(1);

    while (stack) {
        let node = stack.pop();

        if (ch[node] === 1) {
            cur_path.pop();
            if (node === n) {
                while (parent[node] !== node) {
                    path.push(node);
                    node = parent[node];
                }
                //console.log(path);
                continue;
            }

            for (let i = 1; i < ch.length; i++) {
                if (parent[i] === node) ch[i] = 0;
            }
            continue;
        }

        stack.push(node);
        ch[node] = 1;
        cur_path.push(node);
        console.log([...cur_path]);

        for (let next of graph[node]) {
            if (ch[next] === 0) {
                parent[next] = node;
                stack.push(next);
            }
        }
    }

    return answer;
}

let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
];
console.log(solution(5, arr));
