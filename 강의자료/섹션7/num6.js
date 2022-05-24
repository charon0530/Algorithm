function solution(arr){
    let X_idx = -1;
    let jjack_idx = -1;
    for (let i=0; i < arr.length-1; i++){
        if (arr[i] > arr[i+1]) {X_idx=i; break}
    }
    for (let i = X_idx+1; i < arr.length-1;i++){
        if (arr[i] > arr[i+1]) {jjack_idx=i+1; break}
    }
    return [X_idx+1,jjack_idx+1];
}

let arr=[120,130,150,150,130,150];
console.log(solution(arr));

//위의 상황에서 오답!.