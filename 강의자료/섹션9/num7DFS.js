function solution(map){
    //DFS로 탐색
    let chlist = Array.from({length:map.length},()=>new Array(map.length).fill(0));
    let count = 0;

    function DFS(startPos){
        if(map[startPos[0]][startPos[1]]===0) return;
        else{
            map[startPos[0]][startPos[1]] = 0;
            for(let [dy,dx] of [[-1,0],[0,1],[1,0],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]]){
                if (startPos[0]+dy >= 0 && startPos[1]+dx >= 0 && startPos[0]+dy < map.length && startPos[1]+dx <map.length){
                    if(map[startPos[0]+dy][startPos[1]+dx] === 1){
                        //chlist[startPos[0]+dy][startPos[1]+dx] = 1;
                        console.log(startPos[0]+dy,startPos[1]+dx);
                        DFS([startPos[0]+dy,startPos[1]+dx]);
                        //chlist[startPos[0]+dy][startPos[1]+dx] = 0;
                    }
                }
            }
        }
    }

    for(let i =0;i<map.length; i++){
        for (let j=0;j<map.length; j++){
            if(map[i][j] === 1){
                console.log(i,j);
                DFS([i,j]);
                console.log("-------------------");
                count++;
            }
        }
    }
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