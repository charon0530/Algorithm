//(INF값은 간선이 가질 수 있는 거리 비용의 최댓값보다 항상 크다고 가정합니다.)

function solution(n, s, a, b, fares) {
    let dist = Array.from({ length: 7 }, () =>
        new Array(7).fill(Number.MAX_SAFE_INTEGER)
    );
    let parent = Array.from({ length: 7 }, () => new Array(7).fill(-1));

    for (let i = 0; i < parent.length; i++) {
        parent[i][i] = i;
        dist[i][i] = 0;
    }
    fares.forEach((list) => {
        let [s, e, cost] = list;
        dist[s][e] = cost;
        dist[e][s] = cost;
    });
    console.table(dist);
    for (let k = 1; k <= 6; k++) {
        for (let i = 1; i <= 6; i++) {
            for (let j = 1; j <= 6; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    parent[i][j] = k;
                }
            }
        }
    }

    let a_path = [];
    let b_path = [];
    while (true) {
        if (parent[s][a] === a) break;
        a_path.push(a);
        a = parent[s][a];
    }
    while (true) {
        if (parent[s][b] === b) break;
        b_path.push(b);
        b = parent[s][b];
    }
    console.log(a_path);
    console.log(b_path);
}

console.log(
    solution(6, 4, 6, 2, [
        [4, 1, 10],
        [3, 5, 24],
        [5, 6, 2],
        [3, 1, 41],
        [5, 1, 24],
        [4, 6, 50],
        [2, 4, 66],
        [2, 3, 22],
        [1, 6, 25],
    ])
);
