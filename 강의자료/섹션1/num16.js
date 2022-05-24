function solution(s){  
    let answer="";
    for (let i =0; i<s.length;i++){
        if(i > s.indexOf(s[i])){
            continue;
        }
        else{
            answer+=s[i];
        }
    }
    return answer;
}
console.log(solution("ksekkset"));