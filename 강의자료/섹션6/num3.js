function solution(board, moves){
    let answer = 0;
    let resultStack = [];

    moves.forEach((pos)=>{
        //pos = 열 + 1 ;
        for (let row = 0; row < board.length; row ++){
            //0이 아닌값을 찾으면 4값을 스택에 넣고 0으로 바꾼다.
            if (board[row][pos-1]!==0){
                let temp = board[row][pos-1];
                board[row][pos-1] = 0;
                if (resultStack.length!==0 && resultStack[resultStack.length-1] === temp){
                    resultStack.pop();
                    answer+=2;
                }
                else{
                    resultStack.push(temp);
                }
                break;
            }
        }
    });
    return answer;
}
let a=[[0,0,0,0,0],
[0,0,1,0,3],
[0,2,5,0,1],
[4,2,4,4,2],
[3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));