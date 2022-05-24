function solution(m, n, org_board) { // m = > row     n => col
    var answer = 0;
    for(let i = 0; i<org_board.length; i++){
        org_board[i] = org_board[i].split("");
    }
    let board = Array.from({length:org_board[0].length}, ()=>new Array(org_board.length).fill(0));
    for(let i = 0; i<org_board.length; i++){
        for(let j = 0; j <org_board[i].length; j++){
            board[j][board[0].length-i-1] = org_board[i][j]
        }
    }
 
    while(true){
        let tempList = [];
        for(let sy = 0; sy < board.length-1; sy++){
            for(let sx = 0; sx < board[sy].length-1; sx++){
                if (board[sy][sx] !== -1 &&
                    board[sy][sx] === board[sy][sx+1] &&
                    board[sy][sx] === board[sy+1][sx] &&
                    board[sy][sx] === board[sy+1][sx+1]){
                    tempList.push([sy,sx])
                }
            }  
        }


        if (tempList.length === 0) {
            for(let sy = 0; sy < board.length; sy++){
                for(let sx = 0; sx < board[sy].length; sx++){
                    if (board[sy][sx] === -1){
                        answer++;
                    }
                }  
            }
            break;
        }
        
        
        tempList.forEach((pos)=>{
            let y = pos[0];
            let x = pos[1];
            board[y][x] = -1;
            board[y][x+1] = -1;
            board[y+1][x] = -1;
            board[y+1][x+1] = -1;
        })

        console.table(board);
        
        for(let i = 0; i < board.length; i++){
            let count = 0;
            board[i] = board[i].filter((x)=>{
                if (x===-1) count++;
                return x!==-1;
            })
            for(let j = 0; j<count; j ++){
                board[i].push(-1);
            }
        }
        
        console.table(board);
        console.log("==================")
    }
    return answer;
}

console.log(solution(4,5, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"] ));