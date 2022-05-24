// 자신이 양보를 받고싶은 시간을 구한다.
// leander의 limit을 구한다.
// 양보받고 싶은 시간 중 limit아래로 filter한다.
// leander의 양보 가능한 개수를 구한다.
// filter된 양보 받고 싶은 시간과 leander의 양보 가능한 개수 중 작은 값을 택한다.
// leander_time은 어차피 오름차순정렬되어있기 때문에 그냥 개수만큼 스플라이스
// borrower_time은 그 값의 차집합을 구해야한다.
// 서로의 값을 각각 추가한 후 정렬한다.
// queue에 적용시킨다.
// 양보 불가능하다면 뺀다.
const NORMAL = 0;
const LEND = 1;
const BORROW = 2;

function range(size, startAt = 0) {
    return [...Array(size).keys()].map((i) => i + startAt);
}

class Charger {
    constructor() {
        this.queue = [];
        this.meta = {};
        this.leander = [];
        this.head = 0;
        this.tail = 0;
    }

    connet(data = []) {
        console.log("before queue", this.queue);
        const [id, fill_term, exit_time, option] = data;
        const range_list = range(fill_term, this.tail);
        this.meta[id] = {
            fill: range_list,
            start: range_list[0],
            exit: exit_time,
        };
        for (let num of this.meta[id].fill) {
            this.queue[num] = id;
        }

        if (option === LEND) {
            this.leander.push(id);
        } else if (option === BORROW) {
            this._borrow(id);
        }
        this.tail += fill_term;

        console.log("after queue", this.queue);
    }

    _borrow(id) {
        for (let l_id of this.leander) {
            let want = [...this.meta[id].fill].filter(
                (x) => x >= this.meta[id].start
            );
            const limit = this.meta[l_id].exit;

            want = want.filter((x) => x <= limit);
            const want_count = want.length;
            const lend_count = this.meta[l_id].fill.filter(
                (x) => x >= this.head && x < want[0]
            ).length;

            const yield_count = Math.min(want_count, lend_count);
            if (yield_count === 0) continue;

            const leander_time = this.meta[l_id].fill.splice(0, yield_count);
            const borrower_time = want.splice(0, yield_count);
            this.meta[id].fill = this.meta[id].fill.filter(
                (x) => !borrower_time.includes(x)
            );

            this.meta[l_id].fill.push(...borrower_time);
            this.meta[id].fill.push(...leander_time);

            this.meta[l_id].fill.sort((a, b) => a - b);
            this.meta[id].fill.sort((a, b) => a - b);

            for (let num of this.meta[l_id].fill) {
                this.queue[num] = l_id;
            }
            for (let num of this.meta[id].fill) {
                this.queue[num] = id;
            }

            if (
                this.meta[l_id].fill[this.meta[l_id].fill.length - 1] ===
                this.meta[l_id].exit
            ) {
                this.leander = this.leander.filter((x) => x !== l_id);
                delete this.meta[l_id];
            }
        }
    }
}

function main() {
    const charger = new Charger();

    //[car_id, fill_term, exit_time, option] option 0 : normal 1: lend 2: borrow
    // charger.connet(["1", 5, 8, LEND]);
    // charger.connet(["2", 6, 10, BORROW]);

    // charger.connet(["1", 5, 7, LEND]);
    // charger.connet(["2", 5, 10, LEND]);
    // charger.connet(["3", 2, 12, BORROW]);

    charger.connet(["1", 2, 6, LEND]);
    charger.connet(["2", 3, 8, LEND]);
    charger.connet(["3", 7, 99, BORROW]);
}

main();
