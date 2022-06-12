var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

class Dequeue {
    constructor() {
        this.head = 0;
        this.tail = 1;
        this.map = new Map();
    }
    push_front(X) {
        this.map.set(this.head--, X);
    }
    push_back(X) {
        this.map.set(this.tail++, X);
    }
    pop_front() {
        if (this.map.size === 0) return -1;
        const retVal = this.map.get(this.head + 1);
        this.map.delete(this.head + 1);
        this.head++;
        return retVal;
    }
    pop_back() {
        if (this.map.size === 0) return -1;
        const retVal = this.map.get(this.tail - 1);
        this.map.delete(this.tail - 1);
        this.tail--;
        return retVal;
    }
    size() {
        return this.map.size;
    }
    empty() {
        return this.map.size === 0 ? 1 : 0;
    }
    front() {
        if (this.map.size === 0) return -1;
        return this.map.get(this.head + 1);
    }
    back() {
        if (this.map.size === 0) return -1;
        return this.map.get(this.tail - 1);
    }
    rotate(target) {
        let rCount = 0;
        let lCount = 1;
        for (let i = this.head + 1; i < this.tail; i++) {
            if (this.map.get(i) === target) break;
            rCount++;
        }
        for (let i = this.tail - 1; i > this.head; i--) {
            if (this.map.get(i) === target) break;
            lCount++;
        }
        let retVal = 0;
        if (rCount <= lCount) {
            retVal = rCount;
            for (let i = 0; i < rCount; i++) this.push_back(this.pop_front());
        } else {
            retVal = lCount;
            for (let i = 0; i < lCount; i++) this.push_front(this.pop_back());
        }
        return retVal;
    }
}
function solution(input) {
    const [N, M] = input[0].split(" ").map(Number);
    const dq = new Dequeue();
    let count = 0;
    for (let i = 1; i <= N; i++) {
        dq.push_back(i);
    }
    const inputList = input[1].split(" ").map(Number);

    for (let i = 0; i < M; i++) {
        const target = inputList[i];

        if (dq.front() === target) {
            dq.pop_front();
        } else {
            count += dq.rotate(target);
            dq.pop_front();
        }
    }
    console.log(count);
}

solution(param);
