function solution(n){
    var ans = Number.MAX_SAFE_INTEGER;

    function DFS(cur,bat){
        if (bat > ans) return;
        if (cur > n) return;
        if (cur === n){
            ans = Math.min(ans, bat)
            return;
        }
        else{
            for (let i = 1; i<=(n-cur); i++){
                DFS(cur+i,bat+i);
            }
            if(cur!==0) DFS(cur*2,bat)
        }
    }
    DFS(0,0);
    return ans;
}

console.log(solution(6));