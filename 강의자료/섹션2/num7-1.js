function solution(arr){
    let answer=0;
    let N=arr.length;
    for (let y=0; y<N; y++){
        for(let x=0;x<N; x++){
            if ((y-1<0  ||arr[y][x]>arr[y-1][x]) &&
                (y+1>N-1||arr[y][x]>arr[y+1][x]) &&
                (x-1<0  ||arr[y][x]>arr[y][x-1]) &&
                (x+1>N-1||arr[y][x]>arr[y][x+1]) )
                answer++;
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr));