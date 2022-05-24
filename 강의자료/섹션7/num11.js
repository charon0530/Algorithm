function count(songs, capacity){
    let count = 1;
    let sum = 0;
    for (x of songs){
        if (sum + x > capacity){
            count++;
            sum = x;
        }
        else{
            sum+=x;
        }
    }
    return count;
}

function solution(N, arr){
    // 2진 탐색을 통해 해당 값마다 필요한 디스크 비교
    // 요구된 디스크 N 이하 답으로 가능
    // 아니라면 반복
    let answer = -1;
    let lt = Math.max(...arr);
    let rt = arr.reduce((sum,cur)=>sum+cur,0);

    while(lt<=rt){
        let mid = Math.floor((lt+rt)/2);
        if (count(arr,mid)<=N){
            answer = mid;
            rt = mid-1;
        }
        else{
            lt = mid+1;
        }
    }
    return answer;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));