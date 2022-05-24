function solution(queue1 = [], queue2 = []) {
    var answer = Number.MAX_SAFE_INTEGER;
    const sum =
        queue1.reduce((a, b) => a + b, 0) + queue2.reduce((a, b) => a + b, 0);
    const half_sum = sum / 2;

    if (half_sum !== parseInt(half_sum)) return -1;
    function DFS(q1, q2, times) {
        const temp = q1.reduce((a, b) => a + b, 0);
        if (times >= answer) return;
        if (temp === half_sum) {
            answer = Math.min(answer, times);
        } else {
            const copy1_q1 = [...q1];
            const copy1_q2 = [...q2];
            //q1에서 q2로
            if (copy1_q1.length > 0) {
                copy1_q2.push(copy1_q1.shift());
                DFS([...copy1_q1], [...copy1_q2], times + 1);
            }

            //q2에서 q1으로
            const copy2_q1 = [...q1];
            const copy2_q2 = [...q2];
            if (copy2_q2.length > 0) {
                copy2_q1.push(copy2_q2.shift());
                DFS([...copy2_q1], [...copy2_q2], times + 1);
            }
        }
    }
    DFS([...queue1], [...queue2], 0);
    if (answer === Number.MAX_SAFE_INTEGER) answer = -1;
    return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
