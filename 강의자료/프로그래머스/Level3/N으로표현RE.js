function solution(N, target) {
    let dp = Array.from({ length: 9 }, () => []);

    dp[1].push(N);
    //Make dp[NUM]
    for (let num = 2; num <= 8; num++) {
        dp[num].push(Number(String(N).repeat(num)));

        for (let left = 1; left < num; left++) {
            // left <= (num/2) 이면 안됨 => dp[3]을 구할 때
            // dp[1] dp[2] 사칙연산 중 + * 는 순서에 상관없지만
            // - / 는 순서에 상관이 있기 때문!
            let right = num - left;

            dp[left].forEach((left_val) => {
                dp[right].forEach((right_val) => {
                    dp[num].push(left_val + right_val);
                    dp[num].push(left_val - right_val);
                    dp[num].push(left_val * right_val);
                    if (right_val !== 0)
                        dp[num].push(parseInt(left_val / right_val));
                });
            });
        }
        console.log(dp[num]);
        if (dp[num].includes(target)) return num;
    }
    return -1;
}

console.log(solution(5, 12, 4));
