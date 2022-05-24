function solution(word) {
    let answer = 0;
    const count_list = [781, 156, 31, 6, 1];

    for (let i = 0; i < word.length; i++) {
        answer += "AEIOU".indexOf(word[i]) * count_list[i] + 1;
    }
    return answer;
}

console.log(solution("AAAAE"));
