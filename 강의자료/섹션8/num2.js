function solution(N){
    let result = [];
    function DFS(N){
        if(N===1) result.push(1);
        else if(N===0) result.push(0);
        else{
            DFS(parseInt(N/2));
            result.push(N%2);
        }
    }
    DFS(N)
    return result;
}

console.log(solution(1024));