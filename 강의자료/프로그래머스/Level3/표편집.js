function solution(n, k, cmd) {
    var answer = "";
    let del_stack = [];
    let cursor = k;
    let table = [];
    for (let i = 0; i < n; i++) {
        table.push("name" + i);
    }
    let before_table_list = [...table];

    for (let i = 0; i < cmd.length; i++) {
        let [char, num] = cmd[i].split(" ");
        num = Number(num);
        console.log("befor cursor = ", cursor);
        if (char === "U") {
            cursor -= num;
        } else if (char === "D") {
            cursor += num;
        } else if (char === "C") {
            del_stack.push([cursor, table[cursor]]);
            table.splice(cursor, 1);

            if (cursor === table.length) cursor--;
        } else if (char === "Z") {
            let [before_idx, before_name] = del_stack.pop();
            table.splice(before_idx, 0, before_name);
            before_idx <= cursor ? cursor++ : cursor;
        }
    }
    console.log(table);
    console.log(before_table_list);

    let p1 = (p2 = 0);
    while (p1 < before_table_list.length && p2 < table.length) {
        if (before_table_list[p1] === table[p2]) {
            answer += "O";
            p1++;
            p2++;
        } else {
            answer += "X";
            p1++;
        }
    }
    while (p1 < before_table_list.length) {
        answer += "X";
        p1++;
    }
    return answer;
}

console.log(
    solution(8, 2, ["D 2", "C", "U 3", "C", "D 4", "C", "U 2", "Z", "Z"])
);
