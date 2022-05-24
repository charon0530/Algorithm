function solution(queue1 = [], queue2 = []) {
    var answer = 0;
    const origin_q1 = [...queue1];

    const sum =
        queue1.reduce((a, b) => a + b, 0) + queue2.reduce((a, b) => a + b, 0);
    const half_sum = sum / 2;
    if (half_sum !== parseInt(half_sum)) return -1;

    let q1_sum = queue1.reduce((a, b) => a + b, 0);
    let q2_sum = queue2.reduce((a, b) => a + b, 0);
    while (true) {
        if (
            origin_q1.length === queue1.length &&
            answer !== 0 &&
            origin_q1[0] === queue1[0] &&
            origin_q1[origin_q1.length - 1] === queue1[queue1.length - 1]
        ) {
            answer = -1;
            break;
        }
        if (q1_sum > q2_sum) {
            queue2.push(queue1.shift());
            q1_sum -= queue2[queue2.length - 1];
            q2_sum += queue2[queue2.length - 1];
        } else if (q1_sum < q2_sum) {
            queue1.push(queue2.shift());
            q1_sum += queue1[queue1.length - 1];
            q2_sum -= queue1[queue1.length - 1];
        } else {
            break;
        }

        answer++;
    }
    return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
