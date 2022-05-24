// 어느 정점에서 "다른 모든 정점들" 까지 걸리는 시간 => distance ARR
function solution(N,road,K){
    let answer=0;
    let visited = new Array(N+1).fill(0);
    let distance = new Array(N+1).fill(Number.MAX_SAFE_INTEGER);
    let graph = Array.from({length:N+1}, ()=> new Array(N+1).fill(0))
    // init graph
    road.forEach(([s,e,t])=>{
        if (graph[s][e] === 0 && graph[e][s] === 0){
            graph[s][e] = t;
            graph[e][s] = t;
        }
        else{
            graph[s][e] = Math.min(t,graph[s][e]);
            graph[e][s] = Math.min(t,graph[e][s]);
        }
    });

    //1. distance 확인
    distance[1] = 0;
    while(true){
        let now = -1;
        let closest = Number.MAX_SAFE_INTEGER;
        for (let i = 1; i <= N; i++){
            if (visited[i]===1) continue;
            if (distance[i]===Number.MAX_SAFE_INTEGER) continue;
            if (distance[i]>closest) continue;
            now = i;
            closest = distance[i];
        }
        if (now===-1) break;

        //2. 방문할 곳 결정
        visited[now] = 1;

        //3. 방문함으로써 갱신
        for(let i = 1; i<=N; i++){
            if (graph[now][i]===0) continue;
            if (visited[i]===1) continue;
            let next_dist = distance[now] + graph[now][i];

            if (next_dist < distance[i]){
                distance[i] = next_dist;
            }
        } 
    }
    console.log(distance);
    distance.forEach((x)=>{
        if (x<=K) answer++;
    });
    return answer;
}

console.log(solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3))
console.log(solution(6,[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]],4))
