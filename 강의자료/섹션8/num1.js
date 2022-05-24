function recursive(end, start){
    if ((end - start)===-1){
        return;
    }
    console.log(start);
    recursive(end,start+1);
}

function solution(N){
    recursive(N,1);
}

solution(3);