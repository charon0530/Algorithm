function solution(n, k, cmd) {
    let answer = "";
    const meta = {};
    for (let i = 0; i < n; i++) {
        meta[i] = { up: i - 1, down: i + 1 };
    }
    meta[0].up = null;
    meta[n - 1].down = null;
    const stack = [];

    let cursor = k;
    cmd.forEach((c) => {
        const [key, num] = c.split(" ");

        if (key === "U") {
            for (let i = 0; i < num; i++) {
                cursor = meta[cursor].up;
            }
        } else if (key === "D") {
            for (let i = 0; i < num; i++) {
                cursor = meta[cursor].down;
            }
        } else if (key === "C") {
            stack.push([cursor, meta[cursor].up, meta[cursor].down]);
            const saved_cursor = cursor;
            if (meta[cursor].down === null) {
                meta[meta[cursor].up].down = null;
                cursor = meta[cursor].up;
            } else {
                if (meta[cursor].up !== null)
                    meta[meta[cursor].up].down = meta[cursor].down;
                meta[meta[cursor].down].up = meta[cursor].up;
                cursor = meta[cursor].down;
            }
            delete meta[saved_cursor];
        } else {
            const [re_cursor, re_up, re_down] = stack.pop();
            meta[re_cursor] = {};
            meta[re_cursor].up = re_up;
            meta[re_cursor].down = re_down;

            if (re_up !== null) meta[re_up].down = re_cursor;
            if (re_down !== null) meta[re_down].up = re_cursor;
        }
        console.log(meta);
        console.log(cursor);
        console.log("-------------------");
    });
    for (let i = 0; i < n; i++) {
        if (meta[i] !== undefined) answer += "O";
        else answer += "X";
    }
    return answer;
}
console.log(
    solution(8, 2, [
        "D 2",
        "C",
        "U 3",
        "C",
        "D 4",
        "C",
        "U 2",
        "Z",
        "Z",
        "U 1",
        "C",
    ])
);
