function solution(n, lost, reserve) {
    var answer = 0;
    reserve.sort((a,b)=>a-b);
    
    let ch = new Array(n+1).fill(0);
    let re = new Array(n+1).fill(0);
    for(let x of lost){
        ch[x] = 1;
    }
    for(let x of reserve){
        re[x] = 1;
    }
    for(let x of reserve){
        if (ch[x]===1){
            ch[x] = 0;
            re[x] = 0;
        }
    }
    for(let x of reserve){
        if(ch[x-1]===1 && re[x]===1){
            ch[x-1] = 0;
            re[x] = 0;
        }
        else if(ch[x+1]===1 && re[x]===1){
            ch[x+1] = 0;
            re[x] = 0;
        }
    }
    for(let i = 1; i< ch.length; i++){
        if(ch[i]===0) answer++;
    }
    return answer;
}

console.log(solution( 5, [2, 3, 4], [1, 2, 3]));


//앞사람 먼저 주고 이미 있으면 뒷사람