function solution(n, computers) {
    let answer = 0;
    //BFS
    let visited = new Array(n+1).fill(0);
    let queue = [];
    for(let i = 1; i <=n; i++){
        if(visited[i] === 0){
            //console.log(i)
            queue.push(i);
            visited[i]=1;
            while(queue.length){
                //cur node
                let v = queue.shift();
                //next node
                for(let j = 1; j <=n; j++ ){
                    if(computers[v-1][j-1]===1 && visited[j] === 0){
                        queue.push(j);
                        visited[j]=1;
                    }
                }
            }
            answer++;
        }
        
    }
    return answer;
}

console.log(solution(3, [[1, 0, 0], [0, 1, 0], [0, 0, 1]]))