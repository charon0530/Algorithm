function solution(N, road, K) {
    // N is node num
    // K is time
    var answer = [];
    let graph = Array.from({length:N+1}, ()=> new Array(N+1).fill(0))
    // init graph
    road.sort((a,b)=>{
        if (a[0]===b[0]){
            if (a[1]===b[1]){
                return b[2]-a[2];
            }
            return a[1]-b[1];
        }
        return a[0]-b[0];
    });
    for(let i = 0; i<road.length-1; i++){
        if(road[i][0]===road[i+1][0] && road[i][1]===road[i+1][1]){
            road[i] = false;
        }
    }
    road = road.filter((x)=>x)
    
    road.forEach(([s,e,t])=>{
        graph[s].push([e,t]);
        graph[e].push([s,t]);
    });

    let chlist = new Array(N+1).fill(0);
    function DFS(start_node, end_node, time){
        if (time > K) return;
        if (answer.includes(end_node)) return;
        
        if (start_node !== end_node){
            if (time<=K){
                answer.push(start_node);
            }
        }
        if (start_node===end_node){
            if(time<=K){
                answer.push(end_node);
            }
        }
        else{
            for(let x of graph[start_node]){
                let nxt = x[0];
                let t = x[1];
                if(chlist[nxt]===0){
                    chlist[nxt] = 1;
                    time+=t;
                    DFS(nxt,end_node,time);
                    chlist[nxt] = 0;
                    time-=t;
                }
            }
        }
    }
    // 자기자신 1->1
    answer.push(1);
    for(let i =2; i<= N; i++){
        chlist = new Array(N+1).fill(0);
        chlist[1] = 1;
        DFS(1,i,0);
        
    }
    console.log(answer);
    answer = new Set(answer);
    return answer.size;
}

console.log(solution(6,[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]],4))