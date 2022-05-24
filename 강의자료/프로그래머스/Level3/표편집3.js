function solution(n, k, cmd) {
    let del_stack = [];
    let cursor = k;
    let next_pos = [];
    let table = [];
    for (let i = 0; i < n; i++) {
        table.push("O");
        next_pos.push([i - 1, i + 1]);
    }

    for (let i = 0; i < cmd.length; i++) {
        let [char, num] = cmd[i].split(" ");
        num = Number(num);

        if (char === "U") {
            for (let i = 0; i < num; i++) {
                cursor = next_pos[cursor][0];
            }
        } else if (char === "D") {
            for (let i = 0; i < num; i++) {
                cursor = next_pos[cursor][1];
            }
        } else if (char === "C") {
            //clear
            del_stack.push(cursor);
            table[cursor] = "X";

            if (next_pos[cursor][0] !== -1)
                next_pos[next_pos[cursor][0]][1] = next_pos[cursor][1];
            if (next_pos[cursor][1] !== table.length)
                next_pos[next_pos[cursor][1]][0] = next_pos[cursor][0];

            if (next_pos[cursor][1] === table.length) {
                cursor = next_pos[cursor][0];
            } else {
                cursor = next_pos[cursor][1];
            }
        } else if (char === "Z") {
            let before_idx = del_stack.pop();
            table[before_idx] = "O";

            let temp_cur = before_idx + 1;
            while (true) {
                if (temp_cur === table.length) {
                    break;
                }
                if (table[temp_cur] !== "O") {
                    temp_cur++;
                } else {
                    break;
                }
            }

            next_pos[before_idx][1] = temp_cur;
            if (temp_cur !== table.length) {
                next_pos[temp_cur][0] = before_idx;
            }

            temp_cur = before_idx - 1;
            while (true) {
                if (temp_cur === -1) {
                    break;
                }
                if (table[temp_cur] !== "O") {
                    temp_cur--;
                } else {
                    break;
                }
            }
            next_pos[before_idx][0] = temp_cur;
            if (temp_cur !== -1) {
                next_pos[temp_cur][1] = before_idx;
            }
        }
    }
    return table.join("");
}

console.log(
    solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
);
