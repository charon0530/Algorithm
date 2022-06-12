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
    pop(x) {
        if (this.size() === 0) return -1;

        return this.queue[this.head++];
    }
    size() {
        return this.queue.length - this.head;
    }
    empty() {
        if (this.size() === 0) return 1;
        else return 0;
    }
    front() {
        if (this.size() === 0) return -1;
        else return this.queue[this.head];
    }
    back() {
        if (this.size() === 0) return -1;
        else return this.queue[this.queue.length - 1];
    }
}
function solution(input) {
    const N = Number(input[0]);
    const q = new Queue();
    let str = "";
    for (let i = 1; i <= N; i++) {
        let [cmd, num] = input[i].split(" ");
        num = Number(num);
        if (cmd === "push") {
            q.push(num);
        } else if (cmd === "pop") {
            str += q.pop() + "\n";
        } else if (cmd === "size") {
            str += q.size() + "\n";
        } else if (cmd === "empty") {
            str += q.empty() + "\n";
        } else if (cmd === "front") {
            str += q.front() + "\n";
        } else if (cmd === "back") {
            str += q.back() + "\n";
        }
    }
    console.log(str);
}

solution(param);
