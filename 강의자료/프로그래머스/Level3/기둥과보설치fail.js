function solution(n, build_frame) {
    var answer = [[]];
    const board = Array.from({length:n+1},()=>new Array(n+1).fill(0)); // [x][y]
    //SET FLOOR
    for(let i = 0; i<=n;i++){
        board[i][0] = 1;
    }

    function IsPossible(x_pos,y_pos,type){
        if(type === 0){ // type => 0 => 기둥 
            return (board[x_pos,y_pos] === 1 ) ? true : false
        }
        else if( type === 1){
            if (board[x_pos][y_pos] === 1 && board[x_pos][y_pos-1] === 1){ // 왼쪽기둥
                return true;
            }
            else if(board[x_pos+1][y_pos]===1 && board[x_pos+1][y_pos-1] === 1){//오른쪽 기둥
                return true;
            }
            else if (board[x_pos][y_pos] === 1 && board[x_pos+1][y_pos] === 1){ //보사이
                return true;
            }
            return false;
        }
    }
    function IsPossibleDel(x_pos,y_pos,type){
        const temp_board = board.map((line)=>line.slice());
        if(type === 0){ // type => 0 => 기둥 
            temp_board[x_pos][y_pos+1] = 0;

            if (IsPossible(x_pos,y_pos+1,1) && IsPossible(x_pos-1,y_pos+1,1)){}
        }
    }

    build_frame.forEach(frame=>{
        const [x,y,type]
    })
    return answer;
}