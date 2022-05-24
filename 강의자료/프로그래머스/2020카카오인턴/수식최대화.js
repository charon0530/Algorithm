function solution(expression) {
    let answer = 0;
    const op = ["+", "-", "*"];
    const op_list = [];
    const visited = new Array(op.length).fill(0);
    function DFS(L, temp = []) {
        if (L === op.length) {
            op_list.push([...temp]);
        } else {
            for (let i = 0; i < op.length; i++) {
                if (visited[i] === 1) continue;

                visited[i] = 1;
                DFS(L + 1, [...temp, op[i]]);
                visited[i] = 0;
            }
        }
    }
    DFS(0, []);
    console.log(op_list);

    op_list.forEach((op_order) => {
        const exp_op = expression.split(/\d/).filter((x) => x);
        const exp_opr = expression.split(/\D/).map((x) => Number(x));
        console.log(exp_op, exp_opr);
        op_order.forEach((cur_op) => {
            while (exp_op.indexOf(cur_op) !== -1) {
                const idx = exp_op.indexOf(cur_op);
                const poped = exp_opr.splice(idx, 2);
                if (cur_op === "+") {
                    exp_opr.splice(idx, 0, poped[0] + poped[1]);
                } else if (cur_op === "-") {
                    exp_opr.splice(idx, 0, poped[0] - poped[1]);
                } else {
                    exp_opr.splice(idx, 0, poped[0] * poped[1]);
                }
                exp_op.splice(idx, 1);
            }
        });
        answer = Math.max(Math.abs(exp_opr[0]), answer);
    });
    return answer;
}

console.log(solution("100-200*300-500+20"));
