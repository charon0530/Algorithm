function CanGo(people_num, stones, k) {
    // 0보다 작은 값이 연속되는 개수가 k-1개 이하면 true 초과면 false
    // => 0보다 작은 값이 k개 이상이면 false
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] >= people_num) {
            count = 0;
        } else {
            count++;
        }
        if (count === k) return false;
    }
    return true;
}

function solution(stones, k) {
    let answer = 0;
    let lt = 0;
    let rt = 200000000;

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);

        if (CanGo(mid, [...stones], k)) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}
