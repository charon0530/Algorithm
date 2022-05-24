function solution(user_id, banned_id) {
    let answer = [];

    function DFS(banned_id_idx, bitmask) {
        if (banned_id_idx === banned_id.length) {
            answer.push(bitmask);
        } else {
            for (let i = 0; i < user_id.length; i++) {
                let cur_user = user_id[i];
                let changed_ban_id = banned_id[banned_id_idx].replace(
                    /\*/g,
                    "."
                );
                let reg = new RegExp(`^${changed_ban_id}$`);
                if (reg.test(cur_user) && (bitmask & (1 << i)) === 0) {
                    DFS(banned_id_idx + 1, bitmask | (1 << i));
                }
            }
        }
    }
    DFS(0, 0);
    return new Set(answer).size;
}

console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["fr*d*", "abc1**"]
    )
);
