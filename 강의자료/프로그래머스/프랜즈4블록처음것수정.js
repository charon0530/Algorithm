function solution(m, n, board) { // m = > row     n => col
    var answer = 0;
    for(let i = 0; i<board.length; i++){
        board[i] = board[i].split("");
    }
    while(true){
        let tempList = [];
        for(let sy = 0; sy < m-1; sy++){
            for(let sx = 0; sx < n-1; sx++){
                if (board[sy][sx] !== -1 && 
                    board[sy][sx] === board[sy][sx+1] &&
                    board[sy][sx] === board[sy+1][sx] &&
                    board[sy][sx] === board[sy+1][sx+1]){
                    tempList.push(String(sy)+String(sx));
                    tempList.push(String(sy)+String(sx+1));
                    tempList.push(String(sy+1)+String(sx));
                    tempList.push(String(sy+1)+String(sx+1));
                }
            }  
        }
        tempList = [...new Set(tempList)];
        if (tempList.length === 0) break;
        answer += tempList.length;
        
        
        tempList.forEach((str)=>{
            let[y,x] = str.split("");
            board[y][x] = -1;
        })

        let col_Lists = Array.from({length:n},()=>new Array());
        for (let y = 0; y < m; y++){
            for(let x = 0; x < n; x++){
                if (board[y][x]!==-1){
                    col_Lists[x].push(board[y][x]);
                }
            }
        }
        console.table(board);
        for(let i = 0; i<col_Lists.length; i++){
            let count = m - col_Lists[i].length;
            for(let j = 0; j<count; j++) col_Lists[i].unshift(-1);
        }

        for(let i = 0; i < col_Lists.length; i++){
            for (let j = 0; j < col_Lists[i].length; j++){
                board[j][i] = col_Lists[i][j];
            }
        }
        console.table(board);

    }
    return answer;
}

console.log(solution(6,6,["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"]));