//dp
function solution(n) {
    const dp = new Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    let i = 3;
    while (dp[n] === 0) {
        dp[i] = dp[i - 2] + dp[i - 1];
        i++;
    }
    return dp[n] % 1234567;
}

console.log(solution(3));
