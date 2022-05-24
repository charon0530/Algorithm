function solution(gems) {
    var answer = [1, gems.length];
    const kinds_num = [...new Set(gems)].length;
    let ch_dict = new Map();

    let lt = 0;
    let rt = 0;
    for (rt = 0; rt < gems.length; rt++) {
        ch_dict.set(gems[rt], ch_dict.get(gems[rt]) + 1 || 1);

        if (ch_dict.size === kinds_num) {
            while (lt <= rt) {
                ch_dict.set(gems[lt], ch_dict.get(gems[lt]) - 1);

                if (ch_dict.get(gems[lt]) === 0) {
                    ch_dict.delete(gems[lt]);
                    lt++;
                    break;
                }
                lt++;
            }

            if (answer[1] - answer[0] > rt - lt + 1) answer = [lt, rt + 1];
        }
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
