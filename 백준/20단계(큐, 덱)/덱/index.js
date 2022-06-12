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
}
function solution(input) {
    const N = Number(input[0]);
    const dq = new Dequeue();
    let str = "";
    for (let i = 1; i <= N; i++) {
        let [cmd, val] = input[i].split(" ");
        val = Number(val);

        if (cmd === "push_front") {
            dq.push_front(val);
        } else if (cmd === "push_back") {
            dq.push_back(val);
        } else if (cmd === "pop_front") {
            str += dq.pop_front() + "\n";
        } else if (cmd === "pop_back") {
            str += dq.pop_back() + "\n";
        } else if (cmd === "size") {
            str += dq.size() + "\n";
        } else if (cmd === "empty") {
            str += dq.empty() + "\n";
        } else if (cmd === "front") {
            str += dq.front() + "\n";
        } else if (cmd === "back") {
            str += dq.back() + "\n";
        }
    }
    console.log(str);
}

solution(param);
