function BinaryHeap() {
    let list = [];

    //Heapify
    this.minHeapify = (arr, n, i) => {
        let smallest = i;
        let l = 2 * i + 1; //left child index
        let r = 2 * i + 2; //right child index

        //If left child is smaller than root
        if (l < n && arr[l][1] < arr[smallest][1]) {
            //여기 수정 하면됨
            //ex입력이 [0,0,0]이고 1번째 인덱스로 한다면
            //l < n && arr[l][1] < arr[smallest][1]

            smallest = l;
        }

        // If right child is smaller than smallest so far
        if (r < n && arr[r][1] < arr[smallest][1]) {
            //여기 수정 하면됨
            //ex입력이 [0,0,0]이고 1번째 인덱스로 한다면
            //r < n && arr[r][1] < arr[smallest][1]
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

function solution(N, road, K) {
    let answer = 0;
    let visited = new Array(N + 1).fill(0);
    let distance = new Array(N + 1).fill(0);
    const minHeap = new BinaryHeap();
    let graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
    // init graph
    road.forEach(([s, e, t]) => {
        if (graph[s][e] === 0 && graph[e][s] === 0) {
            graph[s][e] = t;
            graph[e][s] = t;
        } else {
            graph[s][e] = Math.min(t, graph[s][e]);
            graph[e][s] = Math.min(t, graph[e][s]);
        }
    });

    minHeap.push([1, 0]);
    while (minHeap.getLength() > 0) {
        const [cur_node, cost] = minHeap.extractMin();

        if (visited[cur_node] === 1) continue;
        visited[cur_node] = 1;
        distance[cur_node] = cost;

        for (let i = 1; i <= N; i++) {
            if (graph[cur_node][i] === 0) continue;
            //if (visited[i]===1) continue;
            let next_cost = cost + graph[cur_node][i];

            minHeap.push([i, next_cost]);
        }
    }
    distance.shift();
    distance.forEach((x) => {
        if (x <= K) answer++;
    });
    return answer;
}

console.log(
    solution(
        5,
        [
            [1, 2, 1],
            [2, 3, 3],
            [5, 2, 2],
            [1, 4, 2],
            [5, 3, 1],
            [5, 4, 2],
        ],
        3
    )
);
console.log(
    solution(
        6,
        [
            [1, 2, 1],
            [1, 3, 2],
            [2, 3, 2],
            [3, 4, 3],
            [3, 5, 2],
            [3, 5, 3],
            [5, 6, 1],
        ],
        4
    )
);
