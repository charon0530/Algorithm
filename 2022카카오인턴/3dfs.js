function solution(alp, cop, problems = []) {
    var answer = Number.MAX_SAFE_INTEGER;
    let target_alp = 0;
    let target_cop = 0;

    problems.push([0, 0, 1, 0, 1]);
    problems.push([0, 0, 0, 1, 1]);
    for (let i = 0; i < problems.length; i++) {
        const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
        target_alp = Math.max(target_alp, alp_req);
        target_cop = Math.max(target_cop, cop_req);
    }
    function DFS(cur_alp, cur_cop, time) {
        if (time)
            if (cur_alp >= target_alp && cur_cop >= target_cop) {
            } else {
            }
    }
    return answer;
}

console.log(
    solution(10, 10, [
        [10, 15, 2, 1, 2],
        [20, 20, 3, 3, 4],
    ])
);
