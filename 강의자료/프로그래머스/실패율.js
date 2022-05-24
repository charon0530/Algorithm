function solution(N, stages) {
    var answer = [];
    let tryArr = new Array(N+1).fill(0);
    let clearArr = new Array(N+1).fill(0);
    stages.forEach(x=>{
        for(let i = 1; i <= N; i++){
            if (x >= i){
                tryArr[i]++;
            }
        }
    });
    stages.forEach(x=>{
        for(let i = 1; i <= N; i++){
            if (x > i){
                clearArr[i]++;
            }
        }
    });
    let failArr = new Array(N+1).fill(0);
    for (let i = 1; i<clearArr.length; i++){
        let rate = (tryArr[i]-clearArr[i])/tryArr[i]
        failArr[i] = [i,rate]
    }

    failArr.sort((a,b)=>{
        if (b[1]===a[1]){
            return a[0] - b[0];
        }
        return b[1]-a[1]
    });

    for (let i = 1; i<failArr.length; i++){
        answer.push(failArr[i][0]);
    }
    return answer;
}

console.log(solution(5,[2,1,2,6,2,4,3,3]));