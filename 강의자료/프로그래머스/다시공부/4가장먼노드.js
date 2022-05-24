// 단순 BFS 문제

function solution(n, edge) {
    let answer = 0;
    let graph = Array.from({ length: n + 1 }, () => []);
    for (let [s, e] of edge) {
        graph[s].push(e);
        graph[e].push(s);
    }
    let queue = [];
    let checked = new Array(n + 1).fill(0);
    let dis = new Array(n + 1).fill(0);

    queue.push(1);
    checked[1] = 1;

    while (queue.length) {
        let cur = queue.shift();

        for (let next of graph[cur]) {
            if (checked[next] === 1) continue;

            checked[next] = 1;
            queue.push(next);
            dis[next] = dis[cur] + 1;
        }
    }
    let max = Math.max(...dis);
    for (let i = 0; i < dis.length; i++) {
        if (dis[i] === max) answer++;
    }
    return answer;
}

console.log(
    solution(6, [
        [3, 6],
        [4, 3],
        [3, 2],
        [1, 3],
        [1, 2],
        [2, 4],
        [5, 2],
    ])
);
