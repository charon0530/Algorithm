function solution(test){
    let answer=0;
    const studentNum = test[0].length;
    for (let to = 1; to < studentNum+1; to++){
        for (let tee=1; tee < studentNum+1; tee++){
            if (to===tee) continue;
            let flag = true;
            for (let eachTest of test){
                let to_rank=-1;
                let tee_rank=-1;
                for(let i=0; i<eachTest.length;i++){
                    if (eachTest[i]===to) to_rank = i;
                    if (eachTest[i]===tee) tee_rank = i;
                }
                if (!(to_rank < tee_rank)){
                    flag = false;
                    break;
                }
            }
            if(flag) {answer++; console.log(to,tee);}
        }
    }
    
    return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));