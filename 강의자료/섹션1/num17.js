function solution(s){  
    let answer=[];
    //answer = [...new Set(s)];
    for (let i = 0; i < s.length ; i ++){
        if (i > s.indexOf(s[i])) continue;
        else answer.push(s[i]);
    }
    return answer;
}
let str=["good", "time", "good", "time", "student"];
console.log(solution(str));