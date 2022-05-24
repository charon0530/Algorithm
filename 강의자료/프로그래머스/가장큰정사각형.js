function solution(board)
{
    let min = Math.min(board.length,board[0].length);
    var answer = 1234;
    let temp = 0;
    for (let i = 0; i <board.length; i++){
        for(let j =0; j <board[0].length; j++){
            temp += board[i][j];
        }
    }
    if (temp === 0) return 0;
    for(let i = min ; i >= 1 ; i--){
        let N = i;
        for (let y = 0; y<board.length+1-i; y++){
            for (let x = 0; x<board[0].length+1 - i; x++){
                let sum = 0;
                let flag = true;
                for(let y_num = y ; y_num<y+N ; y_num++){
                    for( let x_num = x; x_num < x+N; x_num++){
                        if (board[y_num][x_num]===0){
                            flag=false;
                            y_num = y + N;
                            x_num = x + N;
                            break;
                        }
                    }
                }
                if (flag)
                    return N*N;
            }
        }
    }

    return answer;
}

console.log(solution([[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]]));