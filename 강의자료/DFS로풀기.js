function solution(n,computers){
    let answer = 0;
    let chlist = new Array(n+1).fill(0);

    function DFS(start_node){
        if(start_node > n){
            return;
        }
        else{
            for(let i = 1; i<= n; i++){
                if(chlist[i]===0 && computers[start_node-1][i-1]===1){
                    chlist[i]=1;
                    DFS(i);
                }
            }
        }
    }
    for(let i=1; i<=n; i++){
        if(chlist[i]===0){
            chlist[i]=1;
            DFS(i);
            answer++;
        }
    }
    return answer;
}

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]))