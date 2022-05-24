function solution(alp, cop, problems = []) {
    var answer = Number.MAX_SAFE_INTEGER;

    let target_alp = 0;
    let target_cop = 0;

    for (let i = 0; i < problems.length; i++) {
        const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
        target_alp = Math.max(target_alp, alp_req);
        target_cop = Math.max(target_cop, cop_req);
    }

    problems.push([0, 0, 1, 0, 1]);
    problems.push([0, 0, 0, 1, 1]);
    const dp = Array.from({ length: target_cop + 20 }, () =>
        new Array(target_cop + 20).fill(999)
    );

    dp[alp][cop] = 0;

    for (let c_alp = 0; c_alp < dp.length; c_alp++) {
        for (let c_cop = 0; c_cop < dp[0].length; c_cop++) {
            for (let i = 0; i < problems.length; i++) {
                const cur_p = problems[i];
                const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
                if (c_alp - alp_rwd >= alp_req && c_cop - cop_rwd >= cop_req) {
                    dp[c_alp][c_cop] = Math.min(
                        dp[c_alp][c_cop],
                        dp[c_alp - alp_rwd][c_cop - cop_rwd] + cost
                    );
                }
            }
        }
    }
    dp2 = dp.map((line) => line.map((x) => (x === 999 ? "*" : x)));
    console.table(dp2);
    return dp[target_alp][target_cop];
}

console.log(
    solution(10, 10, [
        [10, 15, 2, 1, 2],
        [20, 20, 3, 3, 4],
        [0, 0, 10, 0, 1],
        [0, 0, 0, 10, 1],
        [0, 0, 19, 19, 1],
    ])
);
