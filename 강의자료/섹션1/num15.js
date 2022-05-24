function solution(s){  
    let answer="";
    let half = parseInt(s.length/2);
    if(s.length %2 === 1){
        answer = s[half]
    }
    else{
        //answer = s.substring( half-1,half+1)
        answer = s.substr(half-1,2);
    }
    return answer;
}
console.log(solution("good"));