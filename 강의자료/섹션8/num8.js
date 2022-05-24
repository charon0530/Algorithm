function solution(N, M){
    let arr = Array.from({length:M},()=>0);
    function DFS(temparr, start_idx){
        if(start_idx === temparr.length){
            console.log (temparr);
        }
        else{
            for (let i =1; i<=N; i++){
                temparr[start_idx] = i;
                DFS(temparr, start_idx+1);
            }
        }
    }
    DFS(arr,0);
}

solution(3,2);