function solution(n, k, cmd) {
    var answer = "";
    let del_stack = [];
    let cursor = k;
    let table = [];
    for (let i = 0; i < n; i++) {
        table.push("O");
    }

    function MoveCursor(dir, count) {
        if (dir === "U") {
            for (let i = 0; i < count; i++) {
                cursor--;
                while (table[cursor] === "X") {
                    cursor--;
                }
            }
        } else if (dir === "D") {
            for (let i = 0; i < count; i++) {
                cursor++;
                while (table[cursor] === "X") {
                    cursor++;
                }
            }
        }
    }
    for (let i = 0; i < cmd.length; i++) {
        let [char, num] = cmd[i].split(" ");
        num = Number(num);
        if (char === "U") MoveCursor("U", num);
        else if (char === "D") MoveCursor("D", num);
        else if (char === "C") {
            del_stack.push(cursor);
            table[cursor] = "X";
            let isEnd = true;
            for (let k = cursor + 1; k < table.length; k++) {
                if (table[k] === "O") {
                    isEnd = false;
                    break;
                }
            }
            if (isEnd) MoveCursor("U", 1);
            else MoveCursor("D", 1);
        } else if (char === "Z") {
            let before_idx = del_stack.pop();
            table[before_idx] = "O";
        }
        console.log("after cursor : ", cursor);
    }
    return table.join("");
}
console.log(solution(8, 2, ["C"]));
