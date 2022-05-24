function solution(N){
    //DFS 재귀
    let count = 0;
    function DFS(sum){
        if(sum>N) return;
        if(sum === N){
            count++;
        }
        else{
            for(let i = 1; i<=2; i++){
                DFS(sum+i);
            }
        }
    }
    DFS(0);
    return count;
}

console.log(solution(45));