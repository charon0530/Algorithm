function solution(rc = [], operations = []) {
    var answer = new Array(rc.length);

    const row_num = rc.length;
    const col_num = rc[0].length;
    let obj = {};
    for (let i = 0; i < rc.length; i++) {
        obj[i] = rc[i];
    }

    function ShiftRow() {
        let temp_obj = {};
        for (let [key, val] of Object.entries(obj)) {
            if (Number(key) === row_num - 1) {
                temp_obj[0] = val;
            } else {
                temp_obj[Number(key) + 1] = val;
            }
        }
        obj = temp_obj;
    }

    //ShiftRow();

    function Rotate() {
        const outer_list = [];

        for (let i = 0; i < col_num; i++) {
            outer_list.push([0, i, obj[0][i]]);
        }
        for (let i = 1; i < row_num - 1; i++) {
            outer_list.push([i, col_num - 1, obj[i][col_num - 1]]);
        }
        for (let i = col_num - 1; i >= 0; i--) {
            outer_list.push([row_num - 1, i, obj[row_num - 1][i]]);
        }
        for (let i = row_num - 2; i >= 1; i--) {
            outer_list.push([i, 0, obj[i][0]]);
        }

        const last_val = outer_list[outer_list.length - 1][2];

        for (let i = outer_list.length - 1; i >= 1; i--) {
            outer_list[i][2] = outer_list[i - 1][2];
        }
        outer_list[0][2] = last_val;

        for (let i = 0; i < outer_list.length; i++) {
            const [row, col, val] = outer_list[i];
            obj[row][col] = val;
        }
    }
    operations.forEach((op) => {
        if (op === "Rotate") Rotate();
        if (op === "ShiftRow") ShiftRow();
    });
    for (let [key, val] of Object.entries(obj)) {
        answer[Number(key)] = val;
    }
    return answer;
}

console.log(
    solution(
        [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9],
        ],
        ["Rotate", "ShiftRow"]
    )
);
