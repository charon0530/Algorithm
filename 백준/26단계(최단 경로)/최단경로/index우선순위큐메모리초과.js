var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");
class Queue {
    constructor() {
        this.queue = [];
    }

    push(val) {
        this.queue.push(val);
    }
    pop() {
        this.queue.sort((a, b) => b[1] - a[1]);
        return this.queue.pop();
    }
}
function solution(input) {
    const [V, E] = input[0].split(" ").map(Number);
    const start = Number(input[1]);
    const graph = Array.from({ length: V + 1 }, () => []);
    for (let i = 2; i < 2 + E; i++) {
        const [s, e, c] = input[i].split(" ").map(Number);
        graph[s].push([e, c]);
        //graph[e].push([s, c]);
    }
    console.table(graph);

    const queue = new Queue();
    const visited = new Array(V + 1).fill(0);
    const distArr = new Array(V + 1).fill(Number.MAX_SAFE_INTEGER);
    queue.push([start, 0]);
    while (queue.queue.length) {
        const [curNode, curDist] = queue.pop();
        if (visited[curNode]) continue;
        distArr[curNode] = curDist;
        visited[curNode] = 1;

        for (let [next, nCost] of graph[curNode]) {
            if (visited[next] === 1) continue;
            const newCost = curDist + nCost;
            // if (newCost < distArr[next]) {
            //     distArr[next] = newCost;
            //     queue.push([next, newCost]);
            // }
            distArr[next] = newCost;
            queue.push([next, newCost]);
        }
    }
    let str = "";
    for (let i = 1; i <= V; i++) {
        if (distArr[i] === Number.MAX_SAFE_INTEGER) str += "INF\n";
        else str += distArr[i] + "\n";
    }
    console.log(str);
}

solution(param);
