//인덱스가 넘어가면 그냥 패딩주자
function solution(s = "") {
    let answer = [s];
    if (s.length === 1) return 1;
    for (let size = 1; size <= parseInt(s.length / 2); size++) {
        //windows size
        let temp_answer = "";
        let cache = "";
        let count = 0;
        let cursor = size - 1;
        for (; cursor < s.length; cursor += size) {
            let current = s.slice(cursor + 1 - size, cursor + 1);
            if (current === cache) {
                count++;
            } else {
                if (count === 0);
                else if (count === 1) temp_answer += cache;
                else if (count !== 0) temp_answer += String(count) + cache;
                cache = current;
                count = 1;
            }
            if (cursor + size >= s.length) {
                if (count === 1) temp_answer += cache;
                else if (count !== 0) temp_answer += String(count) + cache;
            }
        }
        if (cursor - size !== s.length - 1) {
            temp_answer += s.slice(cursor - size + 1, s.length);
        }
        answer.push(temp_answer);
    }
    return answer.map((x) => x.length).sort((a, b) => a - b)[0];
}

console.log(solution("abcabcdede"));
