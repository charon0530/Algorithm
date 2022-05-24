function Check(start_row, start_col, padding_lock, key, lock_length) {
    let temp_key = key.map((line) => line.slice());
    let rotated_key = Array.from({ length: key.length }, () =>
        new Array(key.length).fill(0)
    );
    for (let i = 0; i < 4; i++) {
        let copy_padding_lock = padding_lock.map((line) => line.slice());
        for (let row = 0; row < key.length; row++) {
            for (let col = 0; col < key.length; col++) {
                rotated_key[key.length - 1 - col][row] = temp_key[row][col];
            }
        }
        temp_key = rotated_key.map((line) => line.slice());
        for (let r = 0; r < rotated_key.length; r++) {
            for (let c = 0; c < rotated_key.length; c++) {
                copy_padding_lock[start_row + r][start_col + c] +=
                    rotated_key[r][c];
            }
        }

        let flag = true;
        for (let r = key.length - 1; r < key.length - 1 + lock_length; r++) {
            for (
                let c = key.length - 1;
                c < key.length - 1 + lock_length;
                c++
            ) {
                if (copy_padding_lock[r][c] !== 1) {
                    flag = false;
                }
            }
        }
        if (flag === true) return true;
    }
    return false;
}

function solution(key, lock) {
    const padding_lock = [];
    const padding_lock_size = lock.length + 2 * (key.length - 1);
    for (let i = 0; i < lock.length; i++) {
        let temp_line = [...lock[i]];
        for (let j = 0; j < key.length - 1; j++) {
            temp_line.push(0);
            temp_line.unshift(0);
        }
        padding_lock.push([...temp_line]);
    }
    for (let i = 0; i < key.length - 1; i++) {
        padding_lock.push(new Array(padding_lock_size).fill(0));
        padding_lock.unshift(new Array(padding_lock_size).fill(0));
    }
    //console.table(padding_lock);

    for (let i = 0; i < lock.length + (key.length - 1); i++) {
        for (let j = 0; j < lock.length + (key.length - 1); j++) {
            if (Check(i, j, padding_lock, key, lock.length)) return true;
        }
    }
    return false;
}

console.log(
    solution(
        [
            [0, 0, 0],
            [1, 0, 0],
            [0, 1, 1],
        ],
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ]
    )
);
