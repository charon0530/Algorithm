"use strict";
function solution(stones, k) {
    let answer = Number.MAX_SAFE_INTEGER;
    let lt = 0;
    let rt = lt + k - 1;
    while (rt < stones.length) {
        let temp = stones.slice(lt, rt + 1);
        let max = Math.max(...temp);
        let idx = temp.indexOf(max);

        if (max < answer) answer = max;

        lt += idx + 1;
        rt += idx + 1;
    }
    return answer;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
