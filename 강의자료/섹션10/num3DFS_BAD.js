function solution (arr){
    let maxCount = 0;
    function DFS(start_idx,tempArr,for_idx){
        if(start_idx === arr.length){
            if ( maxCount < tempArr.length) console.log(tempArr);
            maxCount = Math.max(maxCount,tempArr.length);
        }
        else{
            for(let i = for_idx; i < arr.length; i++){
                if(tempArr.length === 0 || tempArr[tempArr.length-1] < arr[i]){
                    tempArr.push(arr[i]);
                    DFS(start_idx+1,tempArr,i+1);
                    tempArr.pop();
                }
                DFS(start_idx+1,tempArr,i+1);
            }
        }
    }
    DFS(0,[],0);
    return maxCount;
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));