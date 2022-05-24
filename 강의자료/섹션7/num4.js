function solution(arr){
    for (let i=1; i<arr.length; i++){
        let temp = arr[i];
        console.log(temp)
        let j=0;
        for (j=i-1; j>=0; j--){
            if (arr[j]>temp) arr[j+1] = arr[j];
            else break;
        }
        arr[j+1] = temp;
        console.log(arr)
    }
    return arr;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));