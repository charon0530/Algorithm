function solution(s){  
    let answer="";
    let max = s[0].length;
    let idx = 0;
    for (let i =0; i< s.length;i++){
        if (max<s[i].length) {
            max=s[i].length
            idx = i;
        }
    }
    answer = s[idx];
    return answer;
}
let str=["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));