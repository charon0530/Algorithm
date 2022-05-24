function solution(money,kinds){
    // 최대 tempArr 길이 
    kinds.sort((a,b)=>a-b);
    let mincount = Number.MAX_SAFE_INTEGER;
    function DFS(start_idx,sum){
        if (sum>money) return;
        if (start_idx >= mincount) return;
        if (sum === money){
            mincount = Math.min(mincount,start_idx);
        }
        else{
            for (let i = 0; i<kinds.length; i++){
                DFS(start_idx+1,sum+kinds[i]);
            }
        }
    }
    DFS(0,0);
    return mincount;
}



let arr=[1, 2, 5];
console.log(solution(15, arr));