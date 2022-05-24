function solution(str) {
    let answer = "";
    let arr = new Array(26).fill(0);
    for (let i = 0; i < str.length; i++) {
        arr[str[i].charCodeAt() - "a".charCodeAt()] += 1;
    }
    for (let i = 0; i < 26; i++) {
        if (arr[i] >= 1) answer += String.fromCharCode(i + 97);
    }
    return answer;
}

console.log(solution("bbbcccaaaacc"));
