var fs = require("fs");
var param = fs
    .readFileSync(__dirname + "/ttt.txt") // "/dev/stdin"
    .toString()
    .split("\n");

class PQ {
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
        let best = this.list[1];
        if (this.list.length <= 2) this.list = [null];
        else this.list[1] = this.list.pop();

        let curIdx = 1;
        let leftIdx = curIdx * 2;
        let rightIdx = curIdx * 2 + 1;

        while (curIdx < this.list.length - 1) {
            if (!this.list[leftIdx]) break;
            if (!this.list[rightIdx]) {
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

                [this.list[curIdx], this.list[bestIdx]] = [
                    this.list[bestIdx],
                    this.list[curIdx],
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
    const pq = new PQ();
    let str = "";
    for (let i = 1; i <= N; i++) {
        const curNum = Number(input[i]);
        if (curNum === 0) {
            //console.log(pq.size() === 0 ? 0 : pq.pop());
            str += (pq.size() === 0 ? 0 : pq.pop()) + "\n";
        } else {
            pq.push(curNum);
        }
        //console.log(pq.queue);
    }
    console.log(str);
}

solution(param);
