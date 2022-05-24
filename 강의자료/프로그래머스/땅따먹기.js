function solution(land) {
    var answer = 0;
    function DFS(row, sum, before_idx,temp){
        if (row === land.length){
            console.log(temp, temp.reduce((a,b)=>a+b,0));
            answer = Math.max(answer, sum);
        }
        else{
            for (let i= 0; i<land[0].length; i++){
                if (i !== before_idx){
                    temp.push(land[row][i]);
                    DFS(row+1, sum+land[row][i],i,[...temp])
                    temp.pop();
                }
            }
        }
    }
    DFS(0,0,-1,[]);

    return answer;
}

console.log(solution([[1,2,3,5],
    [5,6,7,100],
    [4,3,2,1]]))