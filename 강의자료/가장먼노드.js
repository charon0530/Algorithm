function solution(n, edge) {
    var answer = 0;
    //BFS
    let queue = [];
    let graph = Array.from({length:n+1},()=>new Array(n+1).fill(0));
    for (let [s,e] of edge){
        graph[s][e] = 1;
        graph[e][s] = 1;
    }
    let visited = new Array(n+1).fill(0);

    queue.push([1,0]);
    visited[1] = 1;

    let tempArr = [];
    tempArr.push([1,0]);

    while(queue.length){
        let [v,count] = queue.shift();
        
        count++;
        for(let i=1; i<=n; i++){
            if(graph[v][i]===1 && visited[i]===0){
                queue.push([i,count]);
                visited[i] = 1;
                tempArr.push([i,count]);
            }
        }
    }

   
    tempArr.sort((a,b)=>b[1]-a[1]);
    let maxCount = tempArr[0][1];
    for(let [v,count] of tempArr){
        if(count === maxCount) answer++;
    }
    return answer;
}

console.log(solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));