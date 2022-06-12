var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");
class Queue {
    constructor() {
        this.head = 0;
        this.queue = [];
    }
    push(x) {
        this.queue.push(x);
    }
    pop() {
        return this.queue[this.head++];
    }
    size() {
        return this.queue.length - this.head;
    }
}
function solution(input) {
    const N = Number(input[0]);
    const q = new Queue();

    for (let i = 1; i <= N; i++) {
        q.push(i);
    }
    while (true) {
        if (q.size() === 1) break;
        q.pop();
        q.push(q.pop());
    }
    console.log(q.pop());
}

solution(param);
