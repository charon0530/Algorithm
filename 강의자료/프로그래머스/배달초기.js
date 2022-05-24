function solution(N, road, K) {
    // N is node num
    // K is time
    var answer = [];
    
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

    let chlist = new Array(N+1).fill(0);
    function DFS(start_node, end_node, time){
        if (end_node === 1 ) return;
        if (time > K) return;
        if (answer.includes(end_node)) return;
        
        if (start_node===end_node){
            if(time<=K){
                answer.push(end_node);
            }
        }
        else{
            for(let i = 1; i<=N; i++){
                if(graph[start_node][i]>0 && chlist[i]===0){
                    chlist[i] = 1;
                    time+=graph[start_node][i];
                    DFS(i,end_node,time);
                    chlist[i] = 0;
                    time-=graph[start_node][i];
                }
            }
        }
    }
    answer.push(1);
    for(let i =1; i<= N; i++){
        chlist = new Array(N+1).fill(0);
        chlist[1] = 1;
        DFS(1,i,0);
        // 자기자신 1->1
    }
    console.log(answer);
    return answer.length;
}

console.log(solution(2,[[1,2,10],[2,2,30]],94))

console.log(solution(6,[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]],4))