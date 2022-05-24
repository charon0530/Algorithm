function solution(n, money) {
    var answer = 0;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;
    money.sort((a, b) => a - b);
    for (let coin of money) {
        for (let i = 1; i <= n; i++) {
            if (i >= coin) {
                dp[i] = dp[i] + dp[i - coin];
            }
        }
    }

    return dp[n];
}

console.log(solution(5, [2, 5, 1]));
