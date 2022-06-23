function solution(alp, cop, problems = []) {
    var answer = Number.MAX_SAFE_INTEGER;
    let target_alp = 0;
    let target_cop = 0;

    let min_alp = Number.MAX_SAFE_INTEGER;
    let min_cop = Number.MAX_SAFE_INTEGER;
    problems.push([0, 0, 1, 0, 1]);
    problems.push([0, 0, 0, 1, 1]);

    for (let i = 0; i < problems.length; i++) {
        const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problems[i];
        target_alp = Math.max(target_alp, alp_req);
        target_cop = Math.max(target_cop, cop_req);

        min_alp = Math.min(min_alp, alp_req);
        min_cop = Math.min(min_cop, cop_req);
    }
    const alp_gap = Math.max(min_alp - alp, 0);
    const cop_gap = Math.max(min_cop - cop, 0);

    let reduce_time = 0;
    if (alp_gap < cop_gap) {
        alp += alp_gap;
        reduce_time += alp_gap;
    } else {
        cop += cop_gap;
        reduce_time += cop_gap;
    }

    function isPossible(time) {
        let cur_alp = alp;
        let cur_cop = cop;

        const queue = [];
        queue.push([cur_alp, cur_cop, 0]);

        while (queue.length) {
            const [c_alp, c_cop, c_time] = queue.shift();
            if (c_time > time) continue;
            else if (c_time < time) {
                if (c_alp >= target_alp && c_cop >= target_cop) return true;
            } else {
                if (c_alp >= target_alp && c_cop >= target_cop) return true;
                else continue;
            }

            //alp우선
            const can_solve = problems.filter(
                (x) => time - c_time >= x[4] && c_alp >= x[0] && c_cop >= x[1]
            );
            for (let i = 0; i < can_solve.length; i++) {
                const cur_p = can_solve[i];
                queue.push([
                    c_alp + cur_p[2],
                    c_cop + cur_p[3],
                    c_time + cur_p[4],
                ]);
            }
        }
        return false;
    }

    let lt = 0;
    let rt = target_alp + target_cop;

    while (lt <= rt) {
        const mid = parseInt((lt + rt) / 2);

        if (isPossible(mid)) {
            answer = mid;
            rt = mid - 1;
        } else {
            lt = mid + 1;
        }
    }
    return answer + reduce_time;
}

console.log(
    solution(10, 10, [
        [10, 15, 2, 1, 2],
        [20, 20, 3, 3, 4],
    ])
);
