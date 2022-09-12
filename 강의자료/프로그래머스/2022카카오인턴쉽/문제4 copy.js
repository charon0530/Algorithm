function solution(n, paths, gates, summits) {
    function BFS(startNode, summitNode) {
        let minValue = Number.MAX_SAFE_INTEGER;
        const exceptSummits = new Set(summits);
        exceptSummits.delete(summitNode);

        const graph = Array.from({ length: n + 1 }, () => []);
        for (let [s, e, c] of paths) {
            graph[s].push([e, c])
            graph[e].push([s, c])
        }
        const queue = [];
        queue.push([startNode, [], new Set([startNode])]);

        let queueIdx = 0;
        while (queueIdx < queue.length) {
            const [curNode, curintensityList, checkedSet] = queue[queueIdx++];
            if (curNode === summitNode) {
                console.log("start : ", startNode, " end : ", summitNode, curintensityList)
                minValue = Math.min(minValue, Math.max(...curintensityList))
                continue;
            }

            for (const [next, cost] of graph[curNode]) {
                if (checkedSet.has(next)) continue;
                if (gates.includes(next)) continue;
                if (exceptSummits.has(next)) continue;

                const nextCheckSet = new Set(checkedSet);
                nextCheckSet.add(next)
                queue.push([next, [...curintensityList, cost], nextCheckSet])
            }
        }
        return minValue
    }

    let answer = [];
    let answerMinValue = Number.MAX_SAFE_INTEGER;
    for (let gate of gates) {
        for (let summit of summits) {
            const BFSValue = BFS(gate, summit)
            console.log("ddd", BFSValue)
            if (answerMinValue > BFSValue) {
                answerMinValue = BFSValue;
                answer = [summit, BFSValue]
            }
        }
    }

    return answer;
}


// console.log(solution(6, [[1, 2, 3], [2, 3, 5], [2, 4, 2], [2, 5, 4], [3, 4, 4], [4, 5, 3], [4, 6, 1], [5, 6, 1]],
//     [1, 3], [5]))

console.log(solution(7,
    [[1, 4, 4], [1, 6, 1], [1, 7, 3], [2, 5, 2], [3, 7, 4], [5, 6, 6]],
    [1], [2, 3, 4]))

// console.log(solution(7,
//     [[1, 2, 5], [1, 4, 1], [2, 3, 1], [2, 6, 7], [4, 5, 1], [5, 6, 1], [6, 7, 1]],
//     [3, 7], [1, 5]))

// console.log(solution(5,
//     [[1, 3, 10], [1, 4, 20], [2, 3, 4], [2, 4, 6], [3, 5, 20], [4, 5, 6]],
//     [1, 2], [5]))
