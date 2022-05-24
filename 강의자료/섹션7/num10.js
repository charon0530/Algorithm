function solution(target, arr){
    let answer = -1;
    arr.sort((a,b)=>a-b);
    let low=0;
    let high = arr.length-1;
    while (low <= high){
        let mid = Math.floor((low+high)/2);
        if (arr[mid]===target){
            answer=mid+1;
            break;
        }
        else{
            if(arr[mid] < target){
                low = mid+1;
            }
            else{
                high = mid-1;
            }
        }
    }
    return answer;
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(65, arr));