function solution(s){
    let answer=[];
    let stdChar=s[0];
    let count=1;
    for (let i=1; i<s.length; i++){
        if (s[i]!==stdChar){
            answer.push(stdChar);
            if (count!==1)
                answer.push(count);
            stdChar=s[i];
            count=1;
        }else{
            count++;
        }
    }
    answer.push(stdChar);
    if (count!==1)
        answer.push(count);
    return answer.join("");
}

let str="KKHSSSSSSSE";
console.log(solution(str));