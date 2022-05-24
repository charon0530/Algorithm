function solution(user_id = [], banned_id = []) {
    const answer = [];

    function DFS(banned_id_idx, user_list = [], picked_list = []) {
        if (banned_id_idx === banned_id.length) {
            answer.push([...picked_list].sort().join(","));
            return;
        } else {
            const changed_ban_id = banned_id[banned_id_idx].replace(/\*/g, ".");
            const reg = new RegExp(`^${changed_ban_id}$`);
            for (let i = 0; i < user_list.length; i++) {
                if (reg.test(user_list[i]) === false) continue;

                const next_user_list = [...user_list];
                const picked = next_user_list.splice(i, 1)[0];
                DFS(banned_id_idx + 1, next_user_list, [
                    ...picked_list,
                    picked,
                ]);
            }
        }
    }

    DFS(0, [...user_id], []);
    return new Set(answer).size;
}

console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["fr*d*", "abc1**"]
    )
);
