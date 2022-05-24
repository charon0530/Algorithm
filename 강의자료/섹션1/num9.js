function solution(s){
    let answer="";
    for (let char of s){
        if (char==='A') answer+='#';
        else answer+=char;
    }

    return answer;
}

let str="BANANA";
console.log(solution(str));