//중복제거를 이런식으로 하면 안된다.
function solution(user_id, banned_id) {
    let answer = 0;
    let key_count = banned_id.reduce((acc, val) => {
        acc[val] = acc[val] + 1 || 1;
        return acc;
    }, {});
    function rangeMul(num) {
        let sum = 1;
        for (let i = 1; i <= num; i++) {
            sum *= i;
        }
        return sum;
    }
    let upper_two_list = Object.values(key_count).filter((x) => x >= 2);
    let divider = 1;
    for (let i = 0; i < upper_two_list.length; i++) {
        divider = divider * rangeMul(upper_two_list[i]);
    }
    console.log(key_count, divider);
    function DFS(idx, list, pick_list) {
        if (idx === banned_id.length) {
            console.log(pick_list.sort());
            answer++;
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
    return answer / divider;
}

console.log(
    solution(
        ["frodo", "fradi", "crodo", "abc123", "frodoc"],
        ["f**d*", "*r***", "******", "******"]
    )
);
