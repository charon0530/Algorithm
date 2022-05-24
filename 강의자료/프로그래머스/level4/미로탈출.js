// 각각의 상황(비트마스킹)마다 cost_map(=dist)를 계산하고 모든 경우의 cost_map에서
// 가장 가까운 노드를 선택해야하는데 이건 너무 연산이 오래걸림 => 힙 자료구조 이용해서 해결
// ex) 00 일때 cost_map // 01 일때 cost_map // 10일때...//11일때... 모두 만들고 비교 하여야함.
// 이것을 힙 자료구조에 비트마스킹을 함께 넣어 해결
// (다익스트라 종류의 알고리즘은) cost_map(=dist)를 사용하거나 힙 자료구조를 이용한다. 둘 중 택 1
class MinHeap {
    constructor() {
        this.heap = [];
    }
    Insert(element) {
        let [cost, node, state] = element;
        this.heap.push(element);
        this.heap.sort((a, b) => a[0] - b[0]);
    }

    Delete() {
        return this.heap.shift();
    }
    GetLength() {
        return this.heap.length;
    }
}
function solution(n, start, end, roads, traps) {
    let graph = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    );
    roads.forEach((road) => {
        let [s, e, c] = road;
        graph[s][e] = c;
    });
    //cost
    let heap = new MinHeap();
    //visited
    let visited = Array.from({ length: n + 1 }, () =>
        new Array(1 << traps.length).fill(false)
    );

    heap.Insert([0, start, 0 << (traps.length - 1)]);

    while (heap.GetLength()) {
        let [cur_cost, cur_node, cur_state] = heap.Delete();
        if (cur_node === end) return cur_cost;
        visited[cur_node][cur_state] = true;

        for (let i = 1; i <= n; i++) {
            if (visited[i][cur_state] === true) continue;
            //출발점과 끝점이 트랩이고 켜져있는지
            let trap1_state = 0;
            let trap1_idx = traps.indexOf(cur_node);
            if (trap1_idx !== -1) {
                // -1 이면 보통 아니면 트랩
                if ((cur_state & (1 << trap1_idx)) === 1) trap1_state = 1;
            }

            let trap2_state = 0;
            let trap2_idx = traps.indexOf(i);
            if (trap2_idx !== -1) {
                if ((cur_state & (1 << trap2_idx)) === 1) trap2_state = 1;
            }
            //켜져있는 트랩의 개수가 짝수면 그래프 그대로 사용 홀수면 역순으로 사용
            let trapNum = trap1_state + trap2_state;
            //다음 state는 끝점이 트랩일 경우 현 스테이트에서 끝점의 트랩비트를 반전

            if (trapNum % 2 === 0) {
                if (graph[cur_node][i] === Number.MAX_SAFE_INTEGER) continue;

                if (trap2_idx === -1) {
                    //트랩이 아니면
                    heap.Insert([cur_cost + graph[cur_node][i], i, cur_state]);
                } else {
                    heap.Insert([
                        cur_cost + graph[cur_node][i],
                        i,
                        cur_state ^ (1 << traps.indexOf(i)),
                    ]);
                }
            } else {
                if (graph[i][cur_node] === Number.MAX_SAFE_INTEGER) continue;

                if (trap2_idx === -1) {
                    heap.Insert([cur_cost + graph[i][cur_node], i, cur_state]);
                } else {
                    heap.Insert([
                        cur_cost + graph[i][cur_node],
                        i,
                        cur_state ^ (1 << traps.indexOf(i)),
                    ]);
                }
            }
        }
    }

    return;
}

console.log(
    solution(
        4,
        1,
        4,
        [
            [1, 2, 1],
            [3, 2, 1],
            [2, 4, 1],
        ],
        [2, 3]
    )
);
