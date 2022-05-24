// DFS의 매개변수는 각 재귀마다 바뀌는 값!

// ex) 뻗는 가지의 경우의 수가 같다면 인덱스만 필요
// 만약 뻗는 가지의 경우가 다르다면 해당 경우에 대한 값도 필요
function solution(user_id, banned_id) {
    let answer = [];

    function DFS(banned_id_idx, user_list, result) {
        if (banned_id_idx === banned_id.length) {
            answer.push([...result].sort().join(","));
        } else {
            for (let i = 0; i < user_list.length; i++) {
                let cur_user = user_list[i];
                if (cur_user.length !== banned_id[banned_id_idx].length)
                    continue;
                let changed_ban_id = banned_id[banned_id_idx].replace(
                    /\*/g,
                    "."
                );
                let reg = new RegExp(changed_ban_id);
                if (reg.test(cur_user)) {
                    let temp = [...user_list];
                    let matched_user = temp.splice(i, 1);
                    DFS(banned_id_idx + 1, temp, [...result, ...matched_user]);
                }
            }
        }
    }
    DFS(0, user_id, []);
    return new Set(answer).size;
}

console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["fr*d*", "abc1**"]
    )
);
