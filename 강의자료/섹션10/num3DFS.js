function solution (arr){
    let maxCount = 0;
    function DFS(start_idx,tempArr){
        if (tempArr.length >=2 && tempArr[tempArr.length-1] <= tempArr[tempArr.length-2]) return;
        if(start_idx === arr.length){
            //if ( maxCount < tempArr.length) console.log(tempArr);
            maxCount = Math.max(maxCount,tempArr.length);

        }
        else{
            tempArr.push(arr[start_idx]);
            DFS(start_idx+1,tempArr);
            tempArr.pop();
            DFS(start_idx+1,tempArr);
        }
    }
    DFS(0,[]);
    return maxCount;
}
let arr=[4,8,13,54,12,98,45,13,5,6,8,15,62,78];
let arr2=[2,7,5,8,6,4,7,12,3];
let arr3=[5, 3, 7, 8, 6, 2, 9, 4];
let arr4 = [1,3,5,7,9,4,8,6];
console.log(solution(arr));
console.log(solution(arr2));
console.log(solution(arr3));
console.log(solution(arr4));