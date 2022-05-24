// 비트마스크는 상태를 나타내는 것이다! (ex 미로탈출다시.js에서는 비트마스크가 아니라 그래프 상태 자체를 json으로 저장시켰다.)
"use strict";
class MinHeap {
    constructor() {
        this.queue = [];
    }

    push(x = []) {
        this.queue.push([...x]);
        this.queue.sort((a, b) => a[1] - b[1]);
    }

    pop() {
        return this.queue.shift();
    }
    getLength() {
        return this.queue.length;
    }
}
function BinaryHeap() {
    let list = [];

    //Heapify
    this.minHeapify = (arr, n, i) => {
        let smallest = i;
        let l = 2 * i + 1; //left child index
        let r = 2 * i + 2; //right child index

        //If left child is smaller than root
        if (l < n && arr[l][1] < arr[smallest][1]) {
            smallest = l;
        }

        // If right child is smaller than smallest so far
        if (r < n && arr[r][1] < arr[smallest][1]) {
            smallest = r;
        }

        // If smallest is not root
        if (smallest != i) {
            let temp = arr[i];
            arr[i] = arr[smallest];
            arr[smallest] = temp;

            // Recursively heapify the affected sub-tree
            this.minHeapify(arr, n, smallest);
        }
    };

    //Insert Value
    this.push = (num) => {
        const size = list.length;

        if (size === 0) {
            list.push(num);
        } else {
            list.push(num);

            //Heapify
            for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
                this.minHeapify(list, list.length, i);
            }
        }
    };

    //Remove value
    this.delete = (num) => {
        const size = list.length;

        //Get the index of the number to be removed
        let i;
        for (i = 0; i < size; i++) {
            if (list[i] === num) {
                break;
            }
        }

        //Swap the number with last element
        [list[i], list[size - 1]] = [list[size - 1], list[i]];

        //Remove the last element
        list.splice(size - 1);

        //Heapify the list again
        for (let i = parseInt(list.length / 2 - 1); i >= 0; i--) {
            this.minHeapify(list, list.length, i);
        }
    };

    //Return min value
    this.findMin = () => list[0];

    //Remove min val
    this.deleteMin = () => {
        this.delete(list[0]);
    };

    //Remove and return min value
    this.extractMin = () => {
        const min = list[0];
        this.delete(min);
        return min;
    };

    //Size
    this.getLength = () => list.length;

    //IsEmpty
    this.isEmpty = () => list.length === 0;

    //Return head
    this.getList = () => list;
}

function solution(n, start, end, roads = [[]], traps = []) {
    const graph = Array.from({ length: n + 1 }, () =>
        new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    );

    roads.forEach((x) => {
        const [s, e, c] = x;
        graph[s][e] = Math.min(graph[s][e], c);
    });

    const visited = {};
    for (let i = 0; i < 1 << 10; i++) {
        visited[i] = new Array(n + 1).fill(0);
    }
    const state = 0;

    const minHeap = new BinaryHeap();
    minHeap.push([start, 0, state]);

    while (minHeap.getLength()) {
        const [c_node, c_dist, c_state] = minHeap.extractMin();
        if (c_node === end) return c_dist;
        if (visited[c_state][c_node] === 1) continue; // 내가생각하기엔 여기는 필수
        visited[c_state][c_node] = 1;

        const c_graph = graph.map((line) => line.slice());
        const trapped_list = [];
        for (let i = 0; i < 10; i++) {
            if ((c_state & (1 << i)) !== 0) {
                trapped_list.push(i);
            }
        }
        for (let trap_idx of trapped_list) {
            const t_num = traps[trap_idx];
            for (let k = 1; k <= n; k++) {
                [c_graph[k][t_num], c_graph[t_num][k]] = [
                    c_graph[t_num][k],
                    c_graph[k][t_num],
                ];
            }
        }
        for (let next = 1; next <= n; next++) {
            if (c_graph[c_node][next] === Number.MAX_SAFE_INTEGER) continue;
            //if(visited[c_state][next] === 1) continue; <- 이건 잘못된 코드
            //정확히 어떤 simulation 상태인지 명확히 할 것!
            const trap_idx = traps.indexOf(next);
            if (trap_idx !== -1) {
                const n_state = c_state ^ (1 << trap_idx);
                if (visited[n_state][next] === 1) continue; // 여기가 올바른 코드
                minHeap.push([next, c_dist + c_graph[c_node][next], n_state]);
            } else {
                if (visited[c_state][next] === 1) continue; // 여기가 올바른 코드
                minHeap.push([next, c_dist + c_graph[c_node][next], c_state]);
            }
        }
    }
}

// console.log(
//     solution(
//         4,
//         1,
//         4,
//         [
//             [1, 2, 1],
//             [3, 2, 1],
//             [2, 4, 1],
//         ],
//         [2, 3]
//     )
// );
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
