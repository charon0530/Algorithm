function solution(gems) {
    var answer = [1, gems.length];
    const kinds_num = [...new Set(gems)].length;
    let ch_dict = {};

    let lt = 0;
    let rt = 0;
    for (rt = 0; rt < gems.length; rt++) {
        ch_dict[gems[rt]] = ch_dict[gems[rt]] + 1 || 1;

        if (Object.keys(ch_dict).length === kinds_num) {
            while (lt <= rt) {
                ch_dict[gems[lt]]--;

                if (ch_dict[gems[lt]] === 0) {
                    delete ch_dict[gems[lt]];
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
