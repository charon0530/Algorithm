function Rotate(target = [[]]) {
    const result = Array.from({ length: target[0].length }, () =>
        new Array(target.length).fill(0)
    );
    for (let i = 0; i < target.length; i++) {
        for (let j = 0; j < target[0].length; j++) {
            result[j][result[0].length - 1 - i] = target[i][j];
        }
    }
    return result;
}
function solution(key = [[]], lock = [[]]) {
    // padding
    const padded_lock = lock.map((line) => line.slice());
    const KEY_LEN = key[0].length;
    const LOCK_LEN = lock[0].length;
    const PADDING_COUNT = KEY_LEN - 1;

    for (let i = 0; i < padded_lock.length; i++) {
        let target = padded_lock[i];
        for (let j = 0; j < PADDING_COUNT; j++) {
            target.unshift(0);
            target.push(0);
        }
    }

    for (let i = 0; i < PADDING_COUNT; i++) {
        padded_lock.unshift(new Array(PADDING_COUNT * 2 + LOCK_LEN).fill(0));
        padded_lock.push(new Array(PADDING_COUNT * 2 + LOCK_LEN).fill(0));
    }

    // rotate and check

    for (let i = 0; i < padded_lock.length - PADDING_COUNT; i++) {
        for (let j = 0; j < padded_lock[0].length - PADDING_COUNT; j++) {
            let copy_key = key.map((line) => line.slice());

            for (let num = 0; num < 4; num++) {
                const copy_padded_lock = padded_lock.map((line) =>
                    line.slice()
                );
                copy_key = Rotate(copy_key);
                for (let row = 0; row < key.length; row++) {
                    for (let col = 0; col < key[0].length; col++) {
                        copy_padded_lock[i + row][j + col] +=
                            copy_key[row][col];
                    }
                }

                //CHECK
                let check = true;
                for (
                    let c_row = PADDING_COUNT;
                    c_row < PADDING_COUNT + LOCK_LEN;
                    c_row++
                ) {
                    for (
                        let c_col = PADDING_COUNT;
                        c_col < PADDING_COUNT + LOCK_LEN;
                        c_col++
                    ) {
                        if (copy_padded_lock[c_row][c_col] !== 1) check = false;
                    }
                }
                if (check) return true;
            }
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
