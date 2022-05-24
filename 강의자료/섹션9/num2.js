function solution(n, arr){
    let answer = 0;
    let gragh = Array.from(Array(n+1),()=>new Array(n+1).fill(0));
    for(let [a,b] of arr){
        gragh[a][b] = 1;
    }
    //1에서 n까지 가는 BFS
    let queue = [];
    let visited = new Array(n+1).fill(0);
    let parent =  new Array(n+1).fill(0);
    let reversedpath=[];
    let startPoint = 3;
    let endPoint = 5;

    parent[startPoint] = startPoint;

    queue.push(startPoint);
    visited[startPoint] = 1;
    while(queue.length){
        let v = queue.shift();
        
        if(v===endPoint){
            while(parent[v]!==v){
                reversedpath.push(v);
                v = parent[v];
            }
            reversedpath.push(startPoint);
            console.log(reversedpath.reverse());
            return;
        }

        for(let i=1; i<=n; i++){
            if(visited[i] === 0 && gragh[v][i]===1){
                visited[i] = 1;
                parent[i] = v;
                queue.push(i);
            }
        }
        //console.log(queue, parent[3]);
    }
    return answer;
 }

 let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));
