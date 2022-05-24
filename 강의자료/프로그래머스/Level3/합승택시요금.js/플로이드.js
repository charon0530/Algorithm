// dist 초기화가 중요함!
// 그 이유는 Dijkstra에서는 "dist 가 가장 낮은 점"
// 즉, 시작지점부터 확장해 나가기 때문에 문제가 없지만
// 플로이드는 시작지점부터 확장해 나간다는 보장이 없다.
// dist[i][i] < 0 인 것이 존재한다면 음수 사이클이 있는 것이다.

// dist만 이용!

function solution(n, s, a, b, fares) {
    let dist = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    );
    let parent = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(-1));

    for (let i = 0; i < parent.length; i++) {
        parent[i][i] = i;
        dist[i][i] = 0;
    }
    fares.forEach((list) => {
        let [s, e, cost] = list;
        dist[s][e] = cost;
        dist[e][s] = cost;
    });

    for (let k = 1; k <= n; k++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    parent[i][j] = k;
                }
            }
        }
    }
    let answer = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= n; i++) {
        answer = Math.min(answer, dist[s][i] + dist[i][a] + dist[i][b]);
    }

    return answer;
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
