function solution(arr){
    // [0][0] 에서 시작 [arr.leng-1][arr.leng-1]에서 끝
    let answer = 0;
    let arrowArr = [[-1,0],[0,1],[1,0],[0,-1]];
    let visited = Array.from({length:arr.length},()=>new Array(arr.length).fill(0));
    let path = [];
    //탐색 알고리즘DFS
    function DFS(start_pos){
        if (start_pos[0] === arr.length-1 && start_pos[1] === arr.length-1){
            console.log(path);
            answer++;
        }
        else{
            for (let [y,x] of arrowArr){
                let next_y = start_pos[0]+y;
                let next_x = start_pos[1]+x;
                if(next_y >= 0 &&
                    next_x >= 0 &&
                    next_y < arr.length &&
                    next_x < arr.length &&
                    visited[next_y][next_x] ===0 &&
                    arr[next_y][next_x]===0){
                        visited[next_y][next_x] = 1;
                        path.push([next_y,next_x]);
                        DFS([next_y,next_x]);
                        visited[next_y][next_x] = 0;
                        path.pop();
                    }
            }
        }
    }
    visited[0][0] = 1;
    path.push([0,0]);
    DFS([0,0]);
    return answer;
}

let arr=[[0, 0, 0, 0, 0, 0, 0], 
         [0, 1, 1, 1, 1, 1, 0],
         [0, 0, 0, 1, 0, 0, 0],
         [1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0],
         [1, 0, 0, 0, 0, 0, 0]];

console.log(solution(arr));