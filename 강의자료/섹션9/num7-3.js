function solution(map){
    let queue = [];
    let visited = Array.from({length:map.length},()=>new Array(map.length).fill(0));
    let count = 0;
    let tmepArr = [];
    for(let i =0; i< map.length; i++){
        for(let j=0; j<map.length; j++){
            if(visited[i][j]===0 && map[i][j]===1){
                queue.push([i,j]);
                tmepArr.push([i,j]);
                while(queue.length){
                    //cur node
                    let [y,x] = queue.shift();
                    visited[y][x] = 1;
                    //next node
                    for ([dy,dx] of [[-1,0],[0,1],[1,0],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]]){
                        //범위 내에서 갈 수 있고 안갔으면
                        if (y+dy>=0 && x+dx>=0 && y+dy<map.length && x+dx<map.length && visited[y+dy][x+dx]===0 && map[y+dy][x+dx]===1){
                            queue.push([y+dy,x+dx]);
                        }
                    }
                }
                count++;
            }
        }
    }
    console.log(tmepArr);
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