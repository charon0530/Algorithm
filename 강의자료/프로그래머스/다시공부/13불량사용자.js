// 목록을 넘기면서 티켓 끊기

function solution(user_id, banned_id) {
    let answer = [];

    function DFS(banned_id_idx, list = [], temp = []) {
        if (banned_id_idx === banned_id.length) {
            answer.push([...temp].sort().join(","));
        } else {
            for (let i = 0; i < list.length; i++) {
                let changed_banned_id = banned_id[banned_id_idx].replace(
                    /\*/g,
                    "."
                );
                let reg = new RegExp(`^${changed_banned_id}$`);
                if (reg.test(list[i])) {
                    let temp_list = [...list];
                    let cut_user = temp_list.splice(i, 1)[0];
                    DFS(banned_id_idx + 1, temp_list, [...temp, cut_user]);
                }
            }
        }
    }
    DFS(0, [...user_id], []);
    return new Set(answer).size;
}

console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["*rodo", "*rodo", "******"]
    )
);
