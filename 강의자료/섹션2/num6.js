function solution(arr){  
    let answer;
    const N = arr.length;
    let rowMaxSum =0;
    let colMaxSum =0;
    let rightDown=0;
    let leftDown=0;

    for(let y=0; y<N; y++){
        let rowSum=0;
        for(let x=0; x<N; x++){
            rowSum+=arr[y][x];
        }
        if (rowSum > rowMaxSum) rowMaxSum=rowSum;
    }

    for(let x=0; x<N; x++){
        let colSum=0;
        for(let y=0; y<N; y++){
            colSum+=arr[y][x];
        }
        if (colSum > colMaxSum) colMaxSum=colSum;
    }

    for (let x=0; x<N;x++){
        for(let y=0; y<N;y++){
            if (x===y) rightDown+=arr[y][x]
        }
    }
    for (let x=0;x<N;x++){
        for(let y=0;y<N;y++){
            if(x+y===N-1) leftDown+=arr[y][x]
        }
    }
    let tempArr = [rowMaxSum,colMaxSum,rightDown,leftDown].sort((a,b)=>(b-a));
    answer = tempArr[0];


    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
         [12, 39, 30, 23, 11],
         [11, 25, 50, 53, 15],
         [19, 27, 29, 37, 27],
         [19, 13, 30, 13, 19]];
console.log(solution(arr));