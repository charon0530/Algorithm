// 주의점 : 2차원 배열을 만들 때 new Array(N+1).fill([]) 이런 식으로
// fill 인자 값으로 값 형식이 아닌 참조 형식을 넘겼을 경우
// 참조 값이 복사되어 들어간다. -> 하나 바꾸면 다 바뀜

function solution(N,road,K){
    let graph = Array.from(Array(N+1),()=>new Array())
    
    road.forEach(([s,e,t])=>{
        graph[s].push([e,t]);
        graph[e].push([s,t]);
    })

    let visited= new Array(N+1).fill(0);
    let distance = new Array(N+1).fill(Number.MAX_SAFE_INTEGER);
    let parent = new Array(N+1);
    distance[1] = 0;
    parent[1] = 1;
    while(true){
        let cur = -1;
        let closest = Number.MAX_SAFE_INTEGER;

        for(let i = 1; i<=N; i++){
            if (visited[i]===1) continue;
            if (distance[i]===Number.MAX_SAFE_INTEGER) continue;
            if (closest > distance[i]){
                cur = i;
                closest = distance[i];
            }
        }
        if (cur === -1) break;

        visited[cur] = 1;

        for(let x of graph[cur]){
            let next = x[0];
            let next_time = x[1];

            if (visited[next] === 1) continue;
            let next_distance = distance[cur] + next_time;
            
            if (next_distance < distance[next]){
                distance[next] = next_distance;
                parent[next] = cur;
            }
        }
    }
    //console.log(distance);
    for(let i = 1; i<=N; i++){
        let endpoint = i;
        console.log(i+" END");
        while(parent[endpoint]!==endpoint){
            console.log(endpoint);
            endpoint = parent[endpoint];
        }
        console.log(1);
    }
    //return distance.filter((x)=>x<=K).length;
}

console.log(solution(5,[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]],3))