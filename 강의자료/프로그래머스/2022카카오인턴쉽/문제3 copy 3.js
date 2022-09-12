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
            if (this.list[parIdx][2] < this.list[curIdx][2]) break;

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
                if (this.list[leftIdx][2] < this.list[curIdx][2]) {
                    [this.list[leftIdx], this.list[curIdx]] = [
                        this.list[curIdx],
                        this.list[leftIdx],
                    ];
                }
                break;
            }

            if (
                this.list[leftIdx][2] < this.list[curIdx][2] ||
                this.list[rightIdx][2] < this.list[curIdx][2]
            ) {
                const bestIdx =
                    this.list[leftIdx][2] < this.list[rightIdx][2]
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
function solution(alp, cop, problems) {
    let targetAlp = 0;
    let targetCop = 0;

    for (let i = 0; i < problems.length; i++) {
        const [reqAlp, reqCop, rwdAlp, rwdCop, dur] = problems[i];
        targetAlp = Math.max(reqAlp, targetAlp);
        targetCop = Math.max(reqCop, targetCop);
    }

    problems.push([0, 0, 1, 0, 1])
    problems.push([0, 0, 0, 1, 1])

    const pq = new PQ();
    const visited = Array.from({ length: 300 }, () => new Array(300).fill(0))
    pq.push([alp, cop, 0]);


    while (pq.size() > 0) {
        const [curAlp, curCop, curTime] = pq.pop();
        if (visited[curAlp][curCop]) continue;
        if (curAlp >= targetAlp && curCop >= targetCop) return curTime;

        visited[curAlp][curCop] = 1;

        for (const [reqAlp, reqCop, rwdAlp, rwdCop, dur] of problems) {
            if (curAlp >= targetAlp && rwdCop === 0) continue;
            if (curCop >= targetCop && rwdAlp === 0) continue;
            if (curAlp >= reqAlp && curCop >= reqCop) {
                pq.push([curAlp + rwdAlp, curCop + rwdCop, curTime + dur]);
            }
        }
    }
}

console.log(
    solution(10, 10, [[10, 15, 2, 1, 2], [20, 20, 3, 3, 4]])
);