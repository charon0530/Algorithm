function solution(arr){  
    let answer=0;
    let dy=Array.from({length:arr.length}, ()=>0);
    dy[0]=1;
    for(let i=1; i<arr.length; i++){
        let max=0;
        for(let j=i-1; j>=0; j--){
            if(arr[j]<arr[i] && dy[j]>max){
                max=dy[j];
            }
        }
        dy[i]=max+1;
       // console.log((dy));
        answer=Math.max(answer, dy[i]);
    }
    return answer;
}

let arr=[4,8,13,54,12,98,45,13,5,6,8,15,62,78];
let arr2=[2,7,5,8,6,4,7,12,3];
let arr3=[5, 3, 7, 8, 6, 2, 9, 4];
let arr4 = [1,3,5,7,9,4,8,6];
console.log(solution(arr));
console.log(solution(arr2));
console.log(solution(arr3));
console.log(solution(arr4));