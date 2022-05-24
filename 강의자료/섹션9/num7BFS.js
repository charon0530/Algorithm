function solution(map){
    let queue = [];
    let visited = Array.from({length:map.length},()=>new Array(map.length).fill(0));
    let count = 0;
    let tempArr= [];
    for (let i=0; i<map.length; i++){
        for(let j=0; j<map.length; j++){
            if (visited[i][j]===0 && map[i][j]===1){
                visited[i][j] = 1;
                queue.push([i,j]);
                tempArr.push([i,j])
                //console.log(i,j);

                //BFS START!
                while(queue.length){
                    //cur node
                    let [y,x] = queue.shift();
                    
            
                    //next node
                    for(let [dy,dx] of [[-1,0],[0,1],[1,0],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){
                        if(y+dy >=0 && x+dx >=0 && y+dy <map.length && x+dx <map.length && visited[y+dy][x+dx]===0 && map[y+dy][x+dx]===1){
                            visited[y+dy][x+dx] = 1;
                            queue.push([y+dy,x+dx]);
                        }
                    }
                }
                count++
            }
        }
    }

    console.log(tempArr);
    return count;    
}

let arr=[[1, 1, 0, 0, 0, 1, 0], 
         [0, 1, 1, 0, 1, 1, 0],
         [0, 1, 0, 0, 0, 0, 0],
         [0, 0, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 1, 0, 0],
         [1, 0, 1, 0, 1, 0, 0]];

console.log(solution(arr));