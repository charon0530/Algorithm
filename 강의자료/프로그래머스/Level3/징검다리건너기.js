"use strict";
function solution(stones, k) {
    var answer = 0;

    function IsPossible(num) {
        let count = 0;
        for (let i = 0; i < stones.length; i++) {
            if (stones[i] < num) count++;
            else count = 0;
            if (count === k) return false;
        }
        return true;
    }

    let lt = 0;
    let rt = Number.MAX_SAFE_INTEGER;

    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        // mid = people num
        if (IsPossible(mid)) {
            answer = mid;
            lt = mid + 1;
        } else {
            rt = mid - 1;
        }
    }
    return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
