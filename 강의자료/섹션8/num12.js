function solution(n,r){
    let table = Array.from(Array(n+1),()=>new Array(r+1).fill(0));
    function DFS(n,r){
        if (table[n][r]!==0) return table[n][r]; 
        if(r===n){
            return 1;
        }
        if(r===0){
            return 1;
        }
        else{
            return table[n][r] = DFS(n-1,r-1) + DFS(n-1,r);
        }
    }
    let answer = DFS(n,r);
    return answer;
}

console.log(solution(33,19));