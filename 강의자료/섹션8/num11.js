function solution(N){
    function DFS(N){
        if(N===1){
            return 1;
        }
        else{
            return N*DFS(N-1);
        }
    }
    let answer = DFS(N);
    return answer;
}



console.log(solution(5));