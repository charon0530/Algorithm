function solution(s, t){
    let answer=[];

    for (let i = 0; i < s.length; i++){
        let mingap=Number.MAX_SAFE_INTEGER
        if (t===s[i]) answer.push(0);
        else{
            for (let j =0; j<s.length; j++){
                if(Math.abs(i-j)>mingap)break;
                if(s[j]===t && Math.abs(i-j) < mingap){
                    mingap=Math.abs(i-j);                
                }
            }
            answer.push(mingap);
        }
    }
    return answer;
}

let str="teachermode";
console.log(solution(str, 'e'));