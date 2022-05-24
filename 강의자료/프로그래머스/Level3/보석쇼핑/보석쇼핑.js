function solution(gems) {
    var answer = [1, gems.length];
    let kinds_set = new Set(gems);
    let kinds_num = kinds_set.size;
    let lt = 0;
    let rt = 0;
    for (rt = 0; rt < gems.length; rt++) {
        if (kinds_set.has(gems[rt])) {
            kinds_set.delete(gems[rt]);
        }
        if (kinds_set.size !== 0) continue;

        while (lt <= rt) {
            if ([...new Set(gems.slice(lt, rt + 1))].length === kinds_num) {
                lt++;
            } else {
                kinds_set.add(gems[lt - 1]);
                break;
            }
        }
        if (answer[1] - answer[0] > rt - lt + 1) answer = [lt, rt + 1];
    }
    return answer;
}

console.log(solution(["DIA", "EM", "EM", "RUB", "DIA"]));
