function solution(expression) {
    const op_list = ["+", "-", "*"];
    const order_list = [];
    let answer = 0;
    const box = new Array(3).fill(null);
    const visited = new Array(3).fill(0);
    function DFS(box_idx) {
        if (box_idx === op_list.length) {
            order_list.push([...box]);
        } else {
            for (let i = 0; i < op_list.length; i++) {
                if (visited[i] === 1) continue;

                visited[i] = 1;
                box[box_idx] = op_list[i];
                DFS(box_idx + 1);
                visited[i] = 0;
            }
        }
    }
    DFS(0);

    console.log(order_list);

    const init_operands = expression.split(/[^0-9]/).map((x) => Number(x));
    const init_operator = expression.split(/[0-9]/).filter((x) => x);

    order_list.forEach((order) => {
        const operands = [...init_operands];
        const operator = [...init_operator];
        for (let i = 0; i < 3; i++) {
            const cur_op = order[i];

            let idx = operator.indexOf(cur_op);
            while (idx !== -1) {
                const [a, b] = operands.splice(idx, 2);
                operator.splice(idx, 1);

                if (cur_op === "+") {
                    operands.splice(idx, 0, a + b);
                } else if (cur_op === "-") {
                    operands.splice(idx, 0, a - b);
                } else if (cur_op === "*") {
                    operands.splice(idx, 0, a * b);
                }
                idx = operator.indexOf(cur_op);
            }
        }
        answer = Math.max(answer, Math.abs(operands[0]));
    });
    return answer;
}

console.log(solution("100-200*300-500+20"));
