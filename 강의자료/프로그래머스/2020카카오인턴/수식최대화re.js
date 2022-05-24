function solution(expression) {
    let answer = 0;
    const ops = ["+", "-", "*"];
    //연산자 우선순위 정하기(순열)
    const op_orders = [];
    const box = new Array(ops.length).fill(-1);
    const visited = new Array(ops.length).fill(0);
    function DFS(b_idx) {
        if (b_idx === box.length) {
            op_orders.push([...box]);
        } else {
            for (let i = 0; i < ops.length; i++) {
                if (visited[i] === 1) continue;
                visited[i] = 1;
                box[b_idx] = ops[i];
                DFS(b_idx + 1);
                visited[i] = 0;
            }
        }
    }
    DFS(0);
    console.log(op_orders);

    //정해지면 순서대로 연산자 계산하기
    op_orders.forEach((order) => {
        const numbers = expression.split(/\D/).map((x) => Number(x));
        const operands = expression.split(/\d/).filter((x) => x);

        order.forEach((c_op) => {
            while (operands.indexOf(c_op) !== -1) {
                const idx = operands.indexOf(c_op);
                operands.splice(idx, 1);

                const [a, b] = [numbers[idx], numbers[idx + 1]];
                if (c_op === "+") {
                    numbers.splice(idx, 2, a + b);
                } else if (c_op === "-") {
                    numbers.splice(idx, 2, a - b);
                } else {
                    numbers.splice(idx, 2, a * b);
                }
            }
        });
        answer = Math.max(answer, Math.abs(numbers[0]));
    });
    return answer;
}

console.log(solution("100-200*300-500+20"));
