function solution(maps) {
    var answer = 1;
    let start_x = 0;
    let start_y = 0;
    let end_x = maps[0].length-1;
    let end_y = maps.length-1;

    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];
    let queue = [];
    let ch  = Array.from({length:maps.length},()=>new Array(maps[0].length).fill(0));
    let parent  = Array.from({length:maps.length},()=>new Array(maps[0].length).fill(-1));

    parent[start_y][start_x] = [start_y,start_x]
    queue.push([start_y, start_x]);
    maps[start_y][start_x] = 0;

    while(queue.length){
        let len = queue.length
        for (let j = 0 ; j<len; j++){
            let pos = queue.shift();
            for(let i = 0; i<4; i++){
                let ny = pos[0] + dy[i];
                let nx = pos[1] + dx[i];
                if (nx>=0 && nx <= maps[0].length-1 && ny>=0 && ny <= maps.length-1 && maps[ny][nx]===1){
                    if(nx===end_x && ny === end_y) {
                        parent[ny][nx] = [pos[0],pos[1],answer];
                        let y = ny;
                        let x = nx;
                        while(true){
                            if (parent[y][x][0]===y && parent[y][x][1] === x){
                                break;
                            }
                            else{
                                console.log(parent[y][x]);
                                // let tempy = parent[y][x][0];
                                // let tempx = parent[y][x][1];
                                // y = tempy;
                                // x = tempx;
                                [y,x] = [parent[y][x][0],parent[y][x][1]]
                            }
                        }
                        return answer+1;
                    }
                    queue.push([ny,nx]);
                    maps[ny][nx] = 0;
                    parent[ny][nx] = [pos[0],pos[1],answer]
                }
            }
        }
        answer++;
    }
    return -1;
}

console.log(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]));