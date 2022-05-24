// 벨만 포드 (V-1) 번 반복하면서 각 루프마다 모든 간선을 확인한다.
// V-1 번 이유는 각 루프마다 갱신이 되는데 최소 갱신(한 단계씩)만 될 수 있기 때문에
// V-1 번을 반복하면 음의 사이클이 없는 이상 무조건 만들어진다
// 즉, V-1 번 반복하기 전에 완성될 수도 있다.
// 또한, V 번 반복했을 때 dist에 변화가 일어난다면 이는 음의 사이클이 있는 것이다.
// https://4legs-study.tistory.com/26
// https://velog.io/@kimdukbae/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%B2%A8%EB%A7%8C-%ED%8F%AC%EB%93%9C-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-Bellman-Ford-Algorithm

// edge 이용!

function solution(n, s, a, b, fares) {
    const dist = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    dist[s] = 0;

    const edge = fares.map((line) => line.slice());
    fares.forEach((x) => {
        const [s, e, cost] = x;
        edge.push([e, s, cost]);
    });

    for (let i = 0; i < n - 1; i++) {
        for (let eg of edge) {
            const [start, end, cost] = eg;
            if (dist[start] === Number.MAX_SAFE_INTEGER) continue;
            if (dist[end] > dist[start] + cost) {
                dist[end] = dist[start] + cost;
            }
        }
    }

    console.log(dist);
}
console.log(
    solution(6, 4, 6, 2, [
        [4, 1, 100],
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
