var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    push(node) {
        this.size++;
        if (this.tail === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.right = node;
            node.left = this.tail;
            this.tail = node;
        }
    }
    pop() {
        this.size--;
        if (this.head === null) {
            console.log("ERROR");
            return;
        }

        if (this.head === this.tail) {
            const retVal = this.head;
            this.head = null;
            this.tail = null;
            return retVal;
        } else {
            const retVal = this.head;
            this.head = this.head.right;
            return retVal;
        }
    }
}
function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);

    const graph = new Array(N);
    for (let i = 1; i <= N; i++) {
        graph[i - 1] = input[i].split("").map(Number);
    }
    console.table(graph);
    const ch = graph.map((line) => line.slice().fill(0));
    let queue = new Queue();

    ch[0][0] = 1;
    queue.push(new Node([0, 0, 1, 1])); //row,col,canBreak,dist

    //let queueIdx = 0;
    const dr = [-1, 0, 1, 0];
    const dc = [0, 1, 0, -1];
    while (queue.size > 0) {
        const [curR, curC, curCanBreak, curDist] = queue.pop().val;

        if (curR === N - 1 && curC === M - 1) {
            console.log(curDist);
            return;
        }
        for (let i = 0; i < 4; i++) {
            const nR = curR + dr[i];
            const nC = curC + dc[i];

            if (nR < 0 || nR >= N || nC < 0 || nC >= M) continue;
            if (ch[nR][nC] === 1) continue;

            if (graph[nR][nC] === 1) {
                if (curCanBreak === 1) {
                    queue.push(new Node([nR, nC, 0, curDist + 1]));
                }
            } else {
                queue.push(new Node([nR, nC, curCanBreak, curDist + 1]));
            }
        }
    }
    console.log(-1);
}

solution(param);
