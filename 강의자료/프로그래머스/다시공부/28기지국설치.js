function CanCover(num, state, w) {
    let need = 0;

    for (let s of state) {
        need += Math.ceil(s / (2 * w + 1));
    }
    if (need <= num) return true;
    else return false;
}
function solution(n, stations, w) {
    let answer = n;
    let lt = 0;
    let rt = n;
    let state = [];

    let cursor = 1;
    for (let i = 0; i < stations.length; i++) {
        const cur_s = stations[i];
        let [s, e] = [cur_s - w, cur_s + w];
        if (s <= 0) s = 1;

        if (s - cursor > 0) {
            state.push(s - cursor);
        }
        cursor = e + 1;
    }
    if (cursor <= n) {
        state.push(n - cursor + 1);
    }

    console.log(state);
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if (CanCover(mid, state, w)) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }

    return answer;
}

console.log(solution(11, [1, 2, 4, 6, 7, 8, 9, 11], 1));
