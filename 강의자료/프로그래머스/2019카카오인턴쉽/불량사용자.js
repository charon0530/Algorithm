function solution(user_id = [], banned_id = []) {
    let answer = [];
    banned_id = banned_id.map((str) => str.replace(/\*/g, "."));

    function DFS(b_idx, list = [], pick_list = []) {
        if (b_idx === banned_id.length) {
            answer.push([...pick_list]);
        } else {
            for (let i = 0; i < list.length; i++) {
                const next_list = [...list];
                const reg = new RegExp(`^${banned_id[b_idx]}$`);
                if (reg.test(next_list[i])) {
                    const poped = next_list.splice(i, 1)[0];
                    DFS(b_idx + 1, [...next_list], [...pick_list, poped]);
                }
            }
        }
    }
    DFS(0, user_id);
    return [...new Set(answer.map((line) => line.sort().join(",")))].length;
}
console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["*rodo", "*rodo", "******"]
    )
);
