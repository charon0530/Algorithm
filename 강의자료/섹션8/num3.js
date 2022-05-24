function solution(n){
    function DFS(n){
        //전위
        if(n>=8){
            return;
        }
        else{
            
            DFS(2*n);
            DFS(2*n+1);
            console.log(n);
        }
    }
    DFS(n);
}

console.log(solution(1));