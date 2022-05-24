function solution(gems) {
    var answer = [1, gems.length];
    let ch_dict = gems.reduce((acc, val) => {
        acc[val] = 0;
        return acc;
    }, {});
    let kinds_set = new Set(gems);

    let lt = 0;
    let rt = 0;
    for (rt = 0; rt < gems.length; rt++) {
        ch_dict[gems[rt]] += 1;

        if (kinds_set.has(gems[rt])) {
            kinds_set.delete(gems[rt]);
        }
        if (kinds_set.size !== 0) continue;

        while (lt <= rt) {
            ch_dict[gems[lt]]--;
            console.log(ch_dict, lt, rt);

            if (ch_dict[gems[lt]] === 0) {
                kinds_set.add(gems[lt]);
                lt++;
                break;
            }
            lt++;
        }
        console.log(ch_dict, lt, rt);
        if (answer[1] - answer[0] > rt - lt + 1) answer = [lt, rt + 1];
    }
    return answer;
}

console.log(
    solution([
        "DIA",
        "RUBY",
        "RUBY",
        "DIA",
        "DIA",
        "EMERALD",
        "SAPPHIRE",
        "DIA",
    ])
);
