function solution(new_id){
    let answer = "";
    // SETP 1
    answer = new_id.toLowerCase();
    // STEP 2
    answer = answer.replace(/[^\w\d-_.]/g,"");
    // STEP 3
    answer = answer.replace(/\.{2,}/g,".");
    //STEP 4
    answer = answer.replace(/^\.|\.$/g,"");
    console.log(answer)
    // STEP 5 
    answer = answer.replace(/^$/g,"a");
    // STEP 6
    answer = answer.slice(0,15).replace(/\.$/g,"")
    //STEP 7
    let lc = answer[answer.length-1];
    while (answer.length<=2) answer += (lc);

    return answer;
}

console.log(solution("z-+.^."));