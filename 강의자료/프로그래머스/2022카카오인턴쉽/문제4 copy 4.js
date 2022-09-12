class Node {
    constructor(nodeNum, curIntensity) {
        this.nodeNum = nodeNum;
        this.curIntensity = curIntensity;
        this.left = null;
        this.right = null;
    }
}
class linkedQueue {
    constructor() {
        this.count = 0;
        this.head = null;
        this.tail = null;
    }

    push(node) {
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.right = node;
            node.left = this.tail;
            this.tail = node;
        }

        this.count++;
    }
    shift() {
        const retValue = this.head;
        this.head = this.head.right;
        if (this.head !== null) {
            this.head.left = null;
        }
        else {
            this.tail = null;
        }
        this.count--;
        return retValue;
    }
}

function solution(n, paths, gates, summits) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [s, e, c] of paths) {
        graph[s].push([e, c])
        graph[e].push([s, c])
    }
    const exceptSet = new Set([...gates]);
    function isOk(mid) {
        let retList = [];
        let minInten = Number.MAX_SAFE_INTEGER;
        for (let gate of gates) {
            const queue = new linkedQueue();
            const checked = new Array(n + 1).fill(0);

            queue.push(new Node(gate, 0))
            checked[gate] = 1;

            while (queue.length) {
                const cNode = queue.shift();
                const [curNode, curInten] = [cNode.nodeNum, cNode.curIntensity]
                if (curInten > minInten) continue;
                if (summits.includes(curNode)) {
                    // retList.push(curNode);
                    // minInten = Math.min(minInten, curInten)
                    // continue;
                    return [true, curNode]
                }

                for (let [nextNode, nextInten] of graph[curNode]) {
                    if (nextInten > mid) continue;
                    if (exceptSet.has(nextNode)) continue;
                    if (checked[nextNode] === 1) continue;

                    checked[nextNode] = 1;
                    //queue.push([nextNode, Math.max(curInten, nextInten)]);
                    queue.push(new Node(nextNode, Math.max(curInten, nextInten)));
                }
            }
        }
        if (retList.length > 0) {
            retList.sort((a, b) => a - b)
            return [true, retList[0]]
        }
        return [false, -1];
    }

    let result = [];
    let lt = 0;
    let rt = 10000000;
    while (lt <= rt) {
        const mid = Math.floor((lt + rt) / 2);
        const [isok, okSummit] = isOk(mid);
        if (isok) {
            result = [okSummit, mid];
            rt = mid - 1;
        }
        else {
            lt = mid + 1
        }
    }
    return result;
}


// console.log(solution(6, [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]],
//     [1, 3], [5]))

// console.log(solution(7,
//     [[1, 4, 4], [1, 6, 1], [1, 7, 3], [2, 5, 2], [3, 7, 4], [5, 6, 6]],
//     [1], [2, 3, 4]))

// console.log(solution(7,
//     [[1, 2, 5], [1, 4, 1], [2, 3, 1], [2, 6, 7], [4, 5, 1], [5, 6, 1], [6, 7, 1]],
//     [3, 7], [1, 5]))

console.log(solution(5,
    [[1, 3, 10], [1, 4, 20], [2, 3, 4], [2, 4, 6], [3, 5, 20], [4, 5, 6]],
    [1, 2], [5]))
