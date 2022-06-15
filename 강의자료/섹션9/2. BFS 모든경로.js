function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let ch = Array.from({ length: n + 1 }, () => 0);
    path = [];
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }
    const queue = [];

    ch[1] = 1;
    path.push(1);
    queue.push([1, [...ch], [...path]]);

    while (queue.length) {
        const [curNode, curCh, curPath] = queue.shift();
        if (curNode === 5) {
            console.log(curPath);
        } else {
            for (let next = 1; next <= 5; next++) {
                if (graph[curNode][next] === 0) continue;
                if (curCh[next] === 1) continue;

                const copyCh = [...curCh];
                const copyPath = [...curPath];
                copyCh[next] = 1;
                copyPath.push(next);
                queue.push([next, copyCh, copyPath]);
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
