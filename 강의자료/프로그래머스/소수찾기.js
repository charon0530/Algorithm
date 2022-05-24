//에라토스테네스의 체
function solution(n) {
    var answer = [];
    
    let list = new Array(n+1).fill(-1);
    for (let i = 2; i<=n ; i++){
        list[i] = i;
    }
    
    let start = new Date();
    for (let i = 2; i <= n; i++){
        if (list[i]===0) continue;

        for (let j = i+i; j<=n; j+=i){
            list[j]=0;
        }
    }
    
    answer = list.filter((x)=>(x!==0)&&(x!==-1));
    let end = new Date();

    console.log(" -> span time : ", end.getTime()-start.getTime());
    console.log(answer)
    return answer.length;
}

console.log(solution(100000));