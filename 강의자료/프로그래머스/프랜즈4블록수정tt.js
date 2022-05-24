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
                    tempList.push(String(sy)+","+String(sx));
                    tempList.push(String(sy)+","+String(sx+1));
                    tempList.push(String(sy+1)+","+String(sx));
                    tempList.push(String(sy+1)+","+String(sx+1));
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
        
        
        tempList.forEach((str)=>{
            let[y,x] = str.split(",");
            board[y][x] = -1;
        })


        
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

    }
    return answer;
}

console.log(solution(0,0,["AA", "AA", "CC", "AA", "AA", "DD"]));
console.log(solution(0,0,["ABCD", "BACE", "BCDD", "BCDD"]));
console.log(solution(0,0,["ABCDADFDA", "ABDFQWERF", "WKDNFNRIT", "AKAKWODCJ", "AKAKWODCJ", "KKKKKKKKK", "KKKKKKKKK", "KKKKKKKKK"]));
console.log(solution(0,0,["AAAAA", "AAAAU", "AAAUU", "UUUUU"]));
console.log(solution(0,0,["AAAAAA", "BBAATB", "BBAATB", "JJJTAA", "JJJTAA"]));
console.log(solution(0,0,["AABBEE", "AAAEEE", "VAAEEV", "AABBEE", "AACCEE", "VVCCEE"]));
