var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

class MinHeap {
    constructor() {
        this.list = [null];
    }
    size() {
        return this.list.length - 1;
    }
    push(val) {
        this.list.push(val);
        let curIdx = this.list.length - 1;
        let parIdx = Math.floor(curIdx / 2);

        while (curIdx > 1) {
            if (this.list[parIdx] < this.list[curIdx]) break;

            [this.list[parIdx], this.list[curIdx]] = [
                this.list[curIdx],
                this.list[parIdx],
            ];
            curIdx = parIdx;
            parIdx = Math.floor(parIdx / 2);
        }
    }
    pop() {
        const best = this.list[1];
        if (this.list.length <= 2) this.list = [null];
        else this.list[1] = this.list.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        while (curIdx < this.list.length - 1) {
            if (this.list[leftIdx] === undefined) break;
            if (this.list[rightIdx] === undefined) {
                if (this.list[leftIdx] < this.list[curIdx]) {
                    [this.list[leftIdx], this.list[curIdx]] = [
                        this.list[curIdx],
                        this.list[leftIdx],
                    ];
                }
                break;
            }
            if (
                this.list[leftIdx] < this.list[curIdx] ||
                this.list[rightIdx] < this.list[curIdx]
            ) {
                const bestIdx =
                    this.list[leftIdx] < this.list[rightIdx]
                        ? leftIdx
                        : rightIdx;

                [this.list[bestIdx], this.list[curIdx]] = [
                    this.list[curIdx],
                    this.list[bestIdx],
                ];

                curIdx = bestIdx;
                leftIdx = curIdx * 2;
                rightIdx = curIdx * 2 + 1;
            } else {
                break;
            }
        }
        return best;
    }
}
class MaxHeap {
    constructor() {
        this.list = [null];
    }
    size() {
        return this.list.length - 1;
    }
    push(val) {
        this.list.push(val);
        let curIdx = this.list.length - 1;
        let parIdx = Math.floor(curIdx / 2);

        while (curIdx > 1) {
            if (this.list[parIdx] > this.list[curIdx]) break;

            [this.list[parIdx], this.list[curIdx]] = [
                this.list[curIdx],
                this.list[parIdx],
            ];
            curIdx = parIdx;
            parIdx = Math.floor(parIdx / 2);
        }
    }
    pop() {
        const best = this.list[1];
        if (this.list.length <= 2) this.list = [null];
        else this.list[1] = this.list.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        while (curIdx < this.list.length - 1) {
            if (this.list[leftIdx] === undefined) break;
            if (this.list[rightIdx] === undefined) {
                if (this.list[leftIdx] > this.list[curIdx]) {
                    [this.list[leftIdx], this.list[curIdx]] = [
                        this.list[curIdx],
                        this.list[leftIdx],
                    ];
                }
                break;
            }
            if (
                this.list[leftIdx] > this.list[curIdx] ||
                this.list[rightIdx] > this.list[curIdx]
            ) {
                const bestIdx =
                    this.list[leftIdx] > this.list[rightIdx]
                        ? leftIdx
                        : rightIdx;

                [this.list[bestIdx], this.list[curIdx]] = [
                    this.list[curIdx],
                    this.list[bestIdx],
                ];

                curIdx = bestIdx;
                leftIdx = curIdx * 2;
                rightIdx = curIdx * 2 + 1;
            } else {
                break;
            }
        }
        return best;
    }
}
function solution(input) {
    const N = Number(input[0]);
    const minHeap = new MinHeap();
    const maxHeap = new MaxHeap();
    let str = "";
    for (let i = 1; i <= N; i++) {
        const curNum = Number(input[i]);

        if (maxHeap.size() === 0) {
            maxHeap.push(curNum);
            str += curNum + "\n";
        } else {
            let bestMax = maxHeap.list[1];

            if (curNum > bestMax) minHeap.push(curNum);
            else maxHeap.push(curNum);

            while (true) {
                if (
                    maxHeap.size() === minHeap.size() ||
                    maxHeap.size() === minHeap.size() + 1
                )
                    break;

                if (maxHeap.size() > minHeap.size()) {
                    minHeap.push(maxHeap.pop());
                } else {
                    maxHeap.push(minHeap.pop());
                }
            }
            str += maxHeap.list[1] + "\n";
        }
    }
    console.log(str);
}

solution(param);
