function solution(N, target){
    let answer = 9;
    function DFS(count,val){
        if(count===9) return;
        if (val===target && answer > count){
            answer = count;
            return;
        }
        else{
            let n2 = N;
            for(let i = 1; i <= 8-count; i++){
                DFS(count + i, val + n2);
                DFS(count + i, val - n2);
                DFS(count + i, val * n2);
                DFS(count + i, val / n2);
                n2 += N * (Math.pow(10, i));
            }
        }
    }
    DFS(0,0)
    return answer === 9 ? -1 : answer
}