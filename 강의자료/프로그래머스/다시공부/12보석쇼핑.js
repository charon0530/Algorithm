function solution(gems) {
    let answer = [1, 100001];
    const kinds = new Set(gems);
    const kinds_num = kinds.size;
    if (kinds.size === 1) return [1, 1];
    const dict = new Map();

    let lt = 0;

    for (let rt = 0; rt < gems.length; rt++) {
        dict.set(gems[rt], dict.get(gems[rt]) + 1 || 1);

        if (dict.size === kinds_num) {
            while (lt <= rt) {
                if (rt - lt < answer[1] - answer[0]) {
                    answer = [lt + 1, rt + 1];
                }
                dict.set(gems[lt], dict.get(gems[lt]) - 1);

                if (dict.get(gems[lt]) === 0) {
                    dict.delete(gems[lt]);
                    lt++;
                    break;
                }
                lt++;
            }
        }
    }
    return answer;
}
