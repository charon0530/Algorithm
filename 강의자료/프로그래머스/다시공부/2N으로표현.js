function solution(N, target) {
    //dp => N을 n개 가지고 만들 수 있는 경우들
    if (N === target) return 1;
    const dp = Array.from({ length: 9 }, () => new Array());
    dp[1].push(N);
    for (let total = 2; total <= 8; total++) {
        dp[total].push(Number(String(N).repeat(total)));
        for (let l = 1; l < total; l++) {
            const l_operand = dp[l];
            const r_operand = dp[total - l];

            //사칙연산
            for (let i = 0; i < l_operand.length; i++) {
                for (let j = 0; j < r_operand.length; j++) {
                    dp[total].push(l_operand[i] + r_operand[j]);
                    dp[total].push(l_operand[i] - r_operand[j]);
                    dp[total].push(l_operand[i] * r_operand[j]);
                    if (r_operand[j] !== 0)
                        dp[total].push(parseInt(l_operand[i] / r_operand[j]));
                }
            }
        }
        if (dp[total].includes(target)) return total;
    }
    return -1;
}

console.log(solution(2, 11));
