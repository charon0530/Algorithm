function solution(arr){
    for(i=0; i<arr.length-1; i++){
        let idx = i;
        for (j=i+1;j<arr.length;j++){
            if (arr[idx]>arr[j]){
                idx = j;
            }
            let temp = arr[idx];
            arr[idx] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}
let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));