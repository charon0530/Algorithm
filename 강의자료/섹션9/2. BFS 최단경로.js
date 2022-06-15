function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let ch = Array.from({ length: n + 1 }, () => 0);
    const path = [];
    for (let [a, b] of arr) {
        graph[a][b] = 1;
    }
    const parent = new Array(n + 1);
    const queue = [];
    queue.push(1);
    ch[1] = 1;
    parent[1] = 1;

    while (queue.length) {
        const curNode = queue.shift();
        if (curNode === 5) {
            console.log("fin");
            break;
        } else {
            for (let next = 1; next <= 5; next++) {
                if (ch[next] === 1) continue;
                if (graph[curNode][next] === 0) continue;

                ch[next] = 1;
                parent[next] = curNode;
                queue.push(next);
            }
        }
    }
    let x = 5;
    while (parent[x] !== x) {
        path.push(x);
        x = parent[x];
    }
    console.log(path);

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
