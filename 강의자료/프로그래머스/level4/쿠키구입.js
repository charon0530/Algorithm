// 이런 문제들은 패딩을 주어서 계산이 편하도록 만든다.
function solution(cookie) {
    if (cookie.length === 1) return 0;
    var answer = 0;
    const summed = [...cookie];
    for (let i = 1; i < cookie.length; i++) {
        summed[i] += summed[i - 1];
    }
    summed.unshift(0);
    console.log(summed);
    for (let mid = 1; mid < summed.length - 1; mid++) {
        let lt = mid - 1;
        let rt = mid + 1;

        while (true) {
            if (lt < 0 || rt >= summed.length) break;
            let left_sum = summed[mid] - summed[lt];
            let right_sum = summed[rt] - summed[mid];

            if (left_sum < right_sum) {
                lt--;
            } else if (left_sum > right_sum) {
                rt++;
            } else if (left_sum === right_sum) {
                answer = Math.max(answer, left_sum);
                lt--;
                rt++;
            }
        }
    }
    return answer;
}

console.log(solution([1, 3, 5, 9]));
