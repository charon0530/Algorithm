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
    const [N, K] = input[0].split(" ").map(Number);
    const q = new Queue();

    for (let i = 1; i <= N; i++) {
        q.push(i);
    }
    let count = 0;
    let answer = [];
    while (true) {
        if (q.size() === 0) break;

        count++;
        if (count % K === 0) {
            answer.push(q.pop());
        } else {
            q.push(q.pop());
        }
    }
    let str = "<";
    str += answer.join(", ");
    str += ">";
    console.log(str);
}

solution(param);
