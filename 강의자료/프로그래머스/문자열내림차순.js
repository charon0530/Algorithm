function solution(s) {
    var answer = '';
    s = s.split('');
    s.sort((a,b)=>b.charCodeAt() - a.charCodeAt())
    console.log(s);
    return answer;
}
console.log(solution("Zbcdefg"));