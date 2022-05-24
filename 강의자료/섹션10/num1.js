function solution(N){
    let dyArr = new Array(N+1).fill(0);
    dyArr[1]=1;
    dyArr[2]=2;

    for(let i=3; i<=N; i++){
        dyArr[i]=(dyArr[i-2]) + (dyArr[i-1]);
    }

    return dyArr[N];
}
console.log(solution(8));
