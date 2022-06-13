var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

class PQ {
    constructor() {
        this.queue = [null];
    }
    size() {
        return this.queue.length - 1;
    }
    push(x) {
        this.queue.push(x);
        let curIdx = this.queue.length - 1;
        let parIdx = Math.floor(curIdx / 2);

        while (curIdx > 1 && this.queue[curIdx] > this.queue[parIdx]) {
            [this.queue[curIdx], this.queue[parIdx]] = [
                this.queue[parIdx],
                this.queue[curIdx],
            ];
            curIdx = parIdx;
            parIdx = Math.floor(parIdx / 2);
        }
    }
    pop() {
        const max = this.queue[1];
        if (this.queue.length <= 2) this.queue = [null];
        else this.queue[1] = this.queue.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        while (curIdx < this.queue.length - 1) {
            //정리필요없음
            if (!this.queue[leftIdx]) break;
            //왼쪽정리
            if (!this.queue[rightIdx]) {
                if (this.queue[leftIdx] > this.queue[curIdx]) {
                    [this.queue[leftIdx], this.queue[curIdx]] = [
                        this.queue[curIdx],
                        this.queue[leftIdx],
                    ];
                }
                break;
            }

            const maxIdx =
                this.queue[leftIdx] < this.queue[rightIdx] ? rightIdx : leftIdx;

            if (this.queue[curIdx] < this.queue[maxIdx]) {
                [this.queue[curIdx], this.queue[maxIdx]] = [
                    this.queue[maxIdx],
                    this.queue[curIdx],
                ];
                curIdx = maxIdx;
                leftIdx = curIdx * 2;
                rightIdx = curIdx * 2 + 1;
            } else {
                break;
            }
        }
        return max;
    }
}
function solution(input) {
    const N = Number(input[0]);
    const pq = new PQ();
    let str = "";
    for (let i = 1; i <= N; i++) {
        const curNum = Number(input[i]);
        if (curNum === 0) {
            console.log(pq.size() === 0 ? 0 : pq.pop());
            //str += (pq.size() === 0 ? 0 : pq.pop()) + "\n";
        } else {
            pq.push(curNum);
        }
        //console.log(pq.queue);
    }
    //console.log(str);
}

solution(param);
