function solution(N, results) {
    let answer = 0;
    let right_path = Array.from({ length: N + 1 }, () => new Array());
    let rev_path = Array.from({ length: N + 1 }, () => new Array());
    results.forEach((result) => {
        let [s, e] = result;
        right_path[s].push(e);
        rev_path[e].push(s);
    });
    let ch = new Array(N + 1).fill(0);

    function DFS(start_node, path) {
        for (let next of path[start_node]) {
            if (ch[next] === 0) {
                ch[next] = 1;
                DFS(next, path);
            }
        }
    }

    for (let person = 1; person <= N; person++) {
        ch.fill(0);
        ch[person] = 1;
        DFS(person, right_path);
        let left_count = -1;
        for (let i = 1; i < ch.length; i++) {
            if (ch[i] === 1) left_count++;
        }

        ch.fill(0);
        ch[person] = 1;
        DFS(person, rev_path);
        let right_count = -1;
        for (let i = 1; i < ch.length; i++) {
            if (ch[i] === 1) right_count++;
        }

        if (left_count + right_count + 1 === N) answer++;
    }
    return answer;
}

console.log(
    solution(5, [
        [4, 3],
        [4, 2],
        [3, 2],
        [1, 2],
        [2, 5],
    ])
);
