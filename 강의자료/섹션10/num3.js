function solution(arr){
    let dyArr = new Array(arr.length);
    dyArr[0] = 1
    for(let i = 1; i < arr.length; i++){
        let small_idx=-1;
        let max = 0;
        for (let j = i-1; j>=0; j--){
            if (arr[j] < arr[i] && dyArr[j] > max){
                max = dyArr[j];
                small_idx = j;
            }
        }
        if(small_idx===-1){
            dyArr[i] = (1);
        }
        else{
            dyArr[i] = (dyArr[small_idx]+1);
        }
        //console.log(dyArr);
    }
    return Math.max(...dyArr);
}
let arr=[4,8,13,54,12,98,45,13,5,6,8,15,62,78];
let arr2=[2,7,5,8,6,4,7,12,3];
let arr3=[5, 3, 7, 8, 6, 2, 9, 4];
let arr4 = [1,3,5,7,9,4,8,6];
console.log(solution(arr));
console.log(solution(arr2));
console.log(solution(arr3));
console.log(solution(arr4));