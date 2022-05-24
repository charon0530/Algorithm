function solution(arr){
    let negative = [];
    let positive = [];
    for (let i = 0 ; i< arr.length; i++){
        if (arr[i]<0) negative.push(arr[i]);
        else positive.push(arr[i]);
    }
    let result=negative.concat(...positive);
    return result;
}

function solution2(arr){
    for (let i =0; i< arr.length-1; i++){
        for (let idx = 0; idx <arr.length-1-i; idx++){
            if (arr[idx] > 0 && arr[idx+1]<0) [arr[idx], arr[idx+1]] = [arr[idx+1],arr[idx]];
        }
    }
    return arr;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution2(arr));