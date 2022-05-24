function solution(cookie) {
    if (cookie.length === 1) return 0;
    var answer = 0;
    const summed = [...cookie];
    for (let i = 1; i < cookie.length; i++) {
        summed[i] += summed[i - 1];
    }
    console.log(summed);
    for (let mid = 0; mid < summed.length - 1; mid++) {
        let lt = mid;
        let rt = mid + 1;

        while (true) {
            if (lt < 0 || rt >= summed.length) break;
            let left_sum = lt <= 0 ? summed[mid] : summed[mid] - summed[lt - 1];
            // 항상 조건은 예외가 일어나는 것에 초점을 맞춘다.
            // 위의 경우 lt - 1 이 음수인 경우를 따져야 하므로 lt가 0이하인 조건을 설정해야 한다.
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
