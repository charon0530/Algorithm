class MinHeap {
    constructor() {
        this.data = [];
    }

    peak() {
        return this.data[0];
    }

    push(value) {
        this.data.push(value);

        let i = this.data.length - 1;
        while (i > 0) {
            const parentIndex = Math.ceil(i / 2 - 1);
            if (this.data[i][2] < this.data[parentIndex][2]) {
                this.swap(i, parentIndex);
                i = parentIndex;
            } else {
                break;
            }
        }
    }

    pop() {
        // 1 or no remaining items is a special case
        if (this.data.length < 2) {
            return this.data.pop();
        }

        const min = this.data[0];
        this.data[0] = this.data.pop();

        let i = 0;
        while (true) {
            const [leftIndex, rightIndex] = [i * 2 + 1, i * 2 + 2];
            let leftValue = Infinity;
            if (this.data[leftIndex]) {
                leftValue = this.data[leftIndex][2];
            }
            let rightValue = Infinity;
            if (this.data[rightIndex]) {
                rightValue = this.data[rightIndex][2];
            }

            // If both children are larger than the candidate, we're done.
            if (leftValue > this.data[i][2] && rightValue > this.data[i][2]) {
                break;
            }

            // Otherwise pick the index of the smallest value
            const smallestIndex =
                leftValue < rightValue ? leftIndex : rightIndex;

            this.swap(i, smallestIndex);
            i = smallestIndex;
        }

        return min;
    }

    swap(i1, i2) {
        const val1 = this.data[i1];
        this.data[i1] = this.data[i2];
        this.data[i2] = val1;
    }
    getLength() {
        return this.data.length;
    }
}
function solution(n, start, end, roads, traps) {
    const graph = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    );
    roads.forEach((r) => {
        const [s, e, c] = r;
        graph[s][e] = Math.min(graph[s][e], c);
    });

    const visited = Array.from({ length: 1 << traps.length }, () =>
        new Array(n + 1).fill(0)
    );

    const minHeap = new MinHeap();
    minHeap.push([0, start, 0]); // [state,start,cost]

    while (minHeap.getLength()) {
        const [state, cur_node, cost] = minHeap.pop();
        if (visited[state][cur_node] === 1) continue;

        visited[state][cur_node] = 1;
        if (cur_node === end) return cost;

        const tempGraph = graph.map((line) => line.slice());
        //state에 따라서 그래프 변경 후 다음 경로찾기
        for (let i = 0; i < traps.length; i++) {
            if ((state & (1 << i)) > 0) {
                //i번째 트랩 on
                const trap_num = traps[i];
                for (let j = 1; j <= n; j++) {
                    [tempGraph[j][trap_num], tempGraph[trap_num][j]] = [
                        tempGraph[trap_num][j],
                        tempGraph[j][trap_num],
                    ];
                }
            }
        }
        for (let i = 1; i <= n; i++) {
            const next = i;
            if (tempGraph[cur_node][next] === Number.MAX_SAFE_INTEGER) continue;
            const trap_idx = traps.indexOf(next);
            if (trap_idx !== -1) {
                const next_state = state ^ (1 << trap_idx);
                minHeap.push([
                    next_state,
                    next,
                    cost + tempGraph[cur_node][next],
                ]);
            } else {
                minHeap.push([state, next, cost + tempGraph[cur_node][next]]);
            }
        }
    }
}

console.log(
    solution(
        3,
        1,
        3,
        [
            [1, 2, 2],
            [3, 2, 3],
        ],
        [2]
    )
);
