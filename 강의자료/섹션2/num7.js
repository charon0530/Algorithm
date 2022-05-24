function solution(arr){  
    let answer=0;
    arr=Wrap(arr);
    let N = arr.length;
    console.log(arr)
    for (let y = 1; y < N-1; y++) {
        for (let x = 1; x < N-1; x++) {
            if (arr[y][x] > arr[y+1][x] &&
                arr[y][x] > arr[y-1][x] &&
                arr[y][x] > arr[y][x+1] &&
                arr[y][x] > arr[y][x-1]
                )
                answer++;

        }
    }

    return answer;
}

function Wrap(arr){
    let N = arr.length;
    let tempArr =[]
    tempArr.push(new Array(N+2).fill(0))
    for (let i=0; i<N;i++){
        tempArr.push([0,...arr[i],0])
    }
    tempArr.push(new Array(N+2).fill(0))
    return tempArr;
}

let arr=[[5, 3, 7, 2, 3], 
         [3, 7, 1, 6, 1],
         [7, 2, 5, 3, 4],
         [4, 3, 6, 4, 1],
         [8, 7, 3, 5, 2]];
console.log(solution(arr));