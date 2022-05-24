function solution(user_id, banned_id) {
    let b_id_count = new Map();

    for (let i = 0; i < banned_id.length; i++) {
        let b_id = banned_id[i].replace(/\*/g, ".");
        let reg = new RegExp(b_id);
        let count = 0;

        let idx = -1;
        for (let j = 0; j < user_id.length; j++) {
            if (user_id[j].length !== b_id.length) continue;

            if (user_id[j].match(reg) !== null) {
                count++;
                idx = j;
            }
        }
        user_id.splice(idx, 1);
        if (b_id_count.has(b_id)) {
            b_id_count.set(b_id, b_id_count.get(b_id) * count);
        } else {
            b_id_count.set(b_id, count);
        }
    }
    console.log(b_id_count);
    return;
}

console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["*rodo", "*rodo", "******"]
    )
);
