function solution(maps) {
    let start_x = 0;
    let start_y = 0;
    let end_x = maps[0].length-1;
    let end_y = maps.length-1;
    let dist = Array.from({length:maps.length},()=>new Array(maps[0].length).fill(-1));
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];
    let queue = [];
    
    queue.push([start_y, start_x]);
    maps[start_y][start_x] = 0;
    dist[start_y][start_x] = 1;
    while(queue.length){
        
        let pos = queue.shift();
        for(let i = 0; i<4; i++){
            let ny = pos[0] + dy[i];
            let nx = pos[1] + dx[i];
            if (nx>=0 && nx <= maps[0].length-1 && ny>=0 && ny <= maps.length-1 && maps[ny][nx]===1){
                if(nx===end_x && ny === end_y)  return dist[pos[0]][pos[1]] + 1;
                queue.push([ny,nx]);
                maps[ny][nx] = 0;
                dist[ny][nx] = dist[pos[0]][pos[1]] + 1;
            }
        }
    }
    return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));