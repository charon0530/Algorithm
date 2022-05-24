// for 문을 들어갈 때의 상태(input)와 for 문에서 한 바퀴 끝날 때의 상태(output)를 고려한다!
function solution(cookie) {
    if (cookie.length === 1) return 0;
    var answer = 0;
    for (let mid = 0; mid < cookie.length - 1; mid++) {
        let lt = mid;
        let rt = mid + 1;
        let left_sum = cookie[lt];
        let right_sum = cookie[rt];
        while (true) {
            if (lt < 0 || rt >= cookie.length) break;

            if (left_sum < right_sum) {
                lt--;
                if (lt < 0) break;
                left_sum += cookie[lt];
            } else if (left_sum > right_sum) {
                rt++;
                if (rt >= cookie.length) break;
                right_sum += cookie[rt];
            } else {
                answer = Math.max(answer, left_sum);
                lt--;
                rt++;
                if (lt < 0 || rt >= cookie.length) break;
                left_sum += cookie[lt];
                right_sum += cookie[rt];
            }
        }
    }
    return answer;
}

console.log(solution([1, 3, 5, 9]));
