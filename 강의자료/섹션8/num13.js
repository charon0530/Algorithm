function solution(N,sum){
    //n-1C0~ n-1Cn-1 까지 저장
    let tempArr= [];
    //nCr 값 구하는 함수
    let table = Array.from(Array(N+1),()=>new Array(N+1).fill(0));
    function DFS(n,r){
        if (table[n][r]!==0) return table[n][r];
        if(r===n) return 1;
        if(r===0) return 1;
        else{
            return table[n][r] = DFS(n-1,r-1) + DFS(n-1,r);
        }
    }
    for(let i = 0; i<N; i++){
        tempArr.push(DFS(N-1,i));
    }

    let combArr = Array.from({length:N},()=>0);
    let chlist = Array.from({length:N},()=>0);
    let combResult = [];
    // 1~N까지 조합 경우의 수 구하기
    function comb(start_idx){
        if(start_idx === N){
            combResult.push([...combArr]);
        }
        else{
            for(let i = 1; i<=N; i++){
                if (chlist[i-1]===0){
                    chlist[i-1] = 1;
                    combArr[start_idx] = i;
                    comb(start_idx+1);
                    chlist[i-1] = 0;
                }
            }
        }
    }
    comb(0);
    for (x of combResult){
        let tempSum =0;
        for (let i = 0 ; i<x.length; i++){
            tempSum += tempArr[i] * x[i]
        }
        if (tempSum === sum){
            return x;
        }
    }


    //저장한 값과 N 서로 곱해서 sum과 비교
}

console.log(solution(4, 16));