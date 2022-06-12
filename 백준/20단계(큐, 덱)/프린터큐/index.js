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
    isOK() {
        const [fP, fI] = this.queue[this.head];

        for (let i = this.head; i < this.queue.length; i++) {
            const [cP, cI] = this.queue[i];
            if (cI === fI) continue;

            if (cP > fP) {
                return false;
            }
        }
        return true;
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
    let lineIdx = 1;
    for (let i = 0; i < N; i++) {
        let count = 1;
        const [docNum, targetIdx] = input[lineIdx++].split(" ").map(Number);
        const docInput = input[lineIdx++].split(" ").map(Number);

        const q = new Queue();
        for (let j = 0; j < docNum; j++) {
            q.push([docInput[j], j]);
        }

        while (true) {
            if (q.isOK()) {
                const [pP, pI] = q.pop();
                if (pI === targetIdx) {
                    console.log(count);
                    break;
                }
                count++;
            } else {
                q.push(q.pop());
            }
        }
    }
}

solution(param);
