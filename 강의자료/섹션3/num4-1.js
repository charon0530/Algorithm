function solution(s, t){
    let answer=[];
    let P = 1000;
    for(let i = 0 ; i < s.length ; i++){
        if (s[i]===t) {
            P = 0;
            answer.push(0);
        }
        else{
            P++;
            answer.push(P);
        }
    }
    P=1000;
    for (let i = s.length-1; i>=0; i--){
        if (s[i]===t){
            P=0;
            answer[i]=P;
        }
        else{
            P++;
            if (answer[i]>P){
                answer[i]=P;
            }
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));