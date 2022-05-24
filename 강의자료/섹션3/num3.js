function solution(str){
    let answer="";
    let i=0
    let num_str = str.replace(/[^0-9]/g,"");
    
    for (i=0;i<num_str;i++){
        if(parseInt(num_str[i])!==0) break;
    }

    answer=num_str.slice(i)
    return answer;
}

let str="g0en2T0s8eSoft";
console.log(solution(str));