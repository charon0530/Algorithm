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
    const N = Number(input[0]);
    let str = "";

    let lineIdx = 1;
    outer: for (let k = 0; k < N; k++) {
        let answer = [];
        const cmdList = input[lineIdx++].split("");
        const numLen = Number(input[lineIdx++]);
        const inputList = input[lineIdx++]
            .split(/\D/)
            .filter((x) => x)
            .map(Number);
        const dq = new Dequeue();
        for (let i = 0; i < numLen; i++) {
            dq.push_back(inputList[i]);
        }
        //console.log(cmdList, numLen, dq);
        let dir = 1;
        for (let i = 0; i < cmdList.length; i++) {
            const curCmd = cmdList[i];
            if (curCmd === "R") {
                dir *= -1;
                continue;
            }

            if (dir === 1) {
                const popVal = dq.pop_front();
                if (popVal === -1) {
                    //answer.push("error");
                    str += "error\n";
                    continue outer;
                }
            } else if (dir === -1) {
                const popVal = dq.pop_back();
                if (popVal === -1) {
                    //answer.push("error");
                    str += "error\n";
                    continue outer;
                }
            }
        }
        if (dir === 1) {
            while (true) {
                const popVal = dq.pop_front();
                if (popVal === -1) break;
                answer.push(popVal);
            }
        } else {
            while (true) {
                const popVal = dq.pop_back();
                if (popVal === -1) break;
                answer.push(popVal);
            }
        }
        //console.log(answer);
        str += "[" + answer.join(",") + "]\n";
    }
    console.log(str);
}

solution(param);
