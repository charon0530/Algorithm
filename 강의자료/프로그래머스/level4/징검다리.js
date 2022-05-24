function cnt(rocks, num) {
    let result = 0;
    let cur_rock = 0;
    for (let i = 0; i < rocks.length; i++) {
        if (rocks[i] - cur_rock >= num) {
            cur_rock = rocks[i];
        } else {
            // 주어진 거리(num) 보다 작으면 지워버린다.
            // 지워진 개수를 카운트 한다.
            result++;
        }
    }
    return result;
}
function solution(distance, rocks, n) {
    var answer = 0;
    rocks.sort((a, b) => a - b);
    rocks.push(distance);
    let lt = 1;
    let rt = 1000000000;

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (cnt(rocks, mid) <= n) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
