function solution(user_id, banned_id) {
    let answer = [];

    function DFS(idx, list, pick_list) {
        if (idx === banned_id.length) {
            //console.log(list, pick_list);
            answer.push(pick_list.sort().join(","));
        } else {
            for (let i = 0; i < list.length; i++) {
                let reg_str = banned_id[idx].replace(/\*/g, ".");
                let reg = new RegExp(reg_str);
                if (list[i].length !== reg_str.length) continue;
                if (list[i].match(reg) === null) continue;
                let temp = [...list];
                let pick = temp.splice(i, 1);

                DFS(idx + 1, temp, [...pick_list, ...pick]);
            }
        }
    }

    DFS(0, user_id, []);
    answer = new Set(answer).size;
    return answer;
}
console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["f**d*", "*r***", "******", "******"]
    )
);
