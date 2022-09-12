// 시작지점 모두를 처음 큐에 모두 넣기

function solution(n, paths, gates, summits) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let [s, e, c] of paths) {
        graph[s].push([e, c])
        graph[e].push([s, c])
    }
    const summitsSet = new Set(summits);
    const exceptSet = new Set(gates);

    function isOk(mid) {
        let retList = [];
        const queue = [];
        const checked = new Array(n + 1).fill(0);

        for (let gate of gates) {
            queue.push(gate)
            checked[gate] = 1;
        }

        let queueIdx = 0;
        while (queueIdx < queue.length) {
            const curNode = queue[queueIdx++];

            if (summitsSet.has(curNode)) {
                retList.push(curNode);

                continue;
                //return [true, curNode]
            }

            for (let [nextNode, nextInten] of graph[curNode]) {
                if (nextInten > mid) continue;
                if (exceptSet.has(nextNode)) continue;
                if (checked[nextNode] === 1) continue;

                checked[nextNode] = 1;
                queue.push(nextNode);
            }
        }

        if (retList.length > 0) {
            retList.sort((a, b) => a - b)
            return [true, retList[0]]
        }
        return [false, -1];
    }

    let result = [];
    let lt = 1;
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
