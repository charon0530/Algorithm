function solution(expression) {
    const answer = [];
    const comb = [];
    const ch = new Array(3).fill(0);
    const op = ["+", "-", "*"];
    const box = new Array(3).fill(null);
    function DFS(box_idx) {
        if (box_idx === box.length) {
            comb.push([...box]);
        } else {
            for (let i = 0; i < 3; i++) {
                if (ch[i] === 1) continue;

                ch[i] = 1;
                box[box_idx] = op[i];
                DFS(box_idx + 1);
                ch[i] = 0;
            }
        }
    }

    DFS(0);
    console.log(comb);

    const numbers = expression.split(/[^0-9]/).map((x) => Number(x));
    const ops = expression.split(/[0-9]/).filter((x) => x);
    console.log(numbers);
    console.log(ops);

    comb.forEach((c) => {
        const temp_nums = [...numbers];
        const temp_ops = [...ops];

        let temp_result = 0;
        for (let i = 0; i < 3; i++) {
            const cur_op = c[i];
            while (temp_ops.indexOf(cur_op) !== -1) {
                const idx = temp_ops.indexOf(cur_op);
                const code = temp_ops.splice(idx, 1)[0];
                const [a, b] = temp_nums.splice(idx, 2);

                if (code === "+") {
                    temp_nums.splice(idx, 0, a + b);
                } else if (code === "-") {
                    temp_nums.splice(idx, 0, a - b);
                } else {
                    temp_nums.splice(idx, 0, a * b);
                }
            }
        }
        answer.push(...temp_nums);
    });
    return answer.map((x) => Math.abs(x)).sort((a, b) => b - a)[0];
}

console.log(solution("100-200*300-500+20"));
