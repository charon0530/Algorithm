function canGo(people_num, stones = [], k) {
    let count = 0; //연속된 음수 돌
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] - people_num >= 0) {
            count = 0;
        } else {
            count++;
        }
        if (count >= k) return false;
    }
    return true;
}

function solution(stones = [], k) {
    let answer = 0;
    let lt = 1;
    let rt = 200000000;

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);

        if (canGo(mid, stones, k)) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}
