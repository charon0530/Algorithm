function solution(N, target) {
    if (target === N) return 1;
    let answer = -1;
    let dp = new Array(10);
    dp[1]=[N];

    for(let i = 2; i <=8; i++){
        dp[i] = [];
        dp[i].push(Number(String(N).repeat(i)));

        for(let lt = 1; lt <= i-1; lt++){
            let rt = i - lt;
            for(let lt_i = 0; lt_i < dp[lt].length; lt_i++){
                for(let rt_i = 0; rt_i<dp[rt].length;rt_i++){
                    //dp[lt][lt_i]  &  dp[rt][rt_i]
                    // add +
                    dp[i].push(dp[lt][lt_i]+dp[rt][rt_i]);
                    // add -
                    dp[i].push(dp[lt][lt_i]-dp[rt][rt_i]);
                    // add /
                    if(dp[rt][rt_i]!==0)
                        dp[i].push(parseInt(dp[lt][lt_i]/dp[rt][rt_i]));
                    //add mul
                    dp[i].push(dp[lt][lt_i]*dp[rt][rt_i]);

                    if (dp[i].includes(target)) {
                        return i;
                    }
                }
            }
                
            
        }
        dp[i] = [...new Set(dp[i])];
    }
    return answer;
}

console.log(solution(5,1010),7)
