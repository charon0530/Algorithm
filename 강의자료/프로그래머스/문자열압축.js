function solution(s){
    let result = s.length;
    // 개수 설정
    for (let i = 1; i <= s.length/2 ; i++){//
        let answer = [];
        let std_str = s.slice(0,i);
        
        
        let count = 1;
        let idx = std_str.length;
        //i개수일때
        for (idx = std_str.length; idx < s.length; idx+=std_str.length ){
            
            if (s[idx+std_str.length-1] === undefined)   break;
            
            if (std_str === s.slice(idx,idx+std_str.length))    count++
            else{
                if (count > 1) answer.push(...String(count));
                answer.push(...std_str)
                std_str = s.slice(idx,idx+std_str.length);
                count = 1;
            }
        }

        if (count > 1) answer.push(...String(count));
        answer.push(...std_str)
        
        for (let j = idx; j < s.length; j++){
            answer.push(s[j]);
        }
        console.log(i,answer);
        result = Math.min(result, answer.length);
    }
    return result;
}

console.log(solution("a"));