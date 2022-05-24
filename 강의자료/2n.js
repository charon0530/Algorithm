function solution(n) {
    var answer = 0;
    var dp = Array(n+1).fill(0)
    dp[1] = 1
    dp[2] = 2
    for(var i=3; i<=n; i++){
        var a = dp[i-1] + dp[i-2]
        dp[i] = a %  1000000007
    }
    return dp[n];
}