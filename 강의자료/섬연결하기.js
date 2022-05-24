//변형된 크러스컬 알고리즘 이용 https://gurumee92.tistory.com/145?category=782305
function solution(n, costs) { 
    let answer = Number.MAX_SAFE_INTEGER;
    let chlist = new Array(n).fill(0);
    let graph = Array.from({length:n},()=>new Array(n).fill(0));
    let cost = Array.from({length:n},()=>new Array(n).fill(0));

    for(let [s,t,c] of costs){
        graph[s][t] = 1;
        graph[t][s] = 1;
        cost[s][t] = c;
        cost[t][s] = c;
    }
    let canGo = 0;
    function DFS(start_node){
        if(chlist.reduce((a,b)=>a+b,0) === n){
            canGo = 1;
        }
        else{
            for(let i = 0; i < n ; i++){
                if(graph[start_node][i] ===1 && chlist[i] ===0 ){
                    chlist[i] = 1;
                    DFS(i);
                }
            }
        }
    }

    costs = costs.sort((a,b)=>b[2]-a[2]);

    let rem=[];//복구 된 cost = 반드시 필요
    while(costs.length){
        let [s,e,c] = costs.shift();
        graph[s][e]=0;
        graph[e][s]=0;
        canGo = 0;

        chlist.fill(0);
        chlist[0]=1;
        DFS(0);
        if (canGo===0){
            //복구
            graph[s][e]=1;
            graph[e][s]=1;
            rem.push(c);
        }
    }

    answer = rem.reduce((a,b)=>a+b,0);
    return answer;
}


console.log(solution(7, [[1,0,1],[3,2,1],[4,5,1],[3,5,9],[3,6,10],[1,6,1],[6,5,1]]))
