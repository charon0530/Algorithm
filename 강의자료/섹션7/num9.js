function solution(arr){
    let answer = 0;
    for (let t=0; t<=72; t++){
        let count = 0;
        for(x of arr){
            if (x[0]<=t && x[1]>t) count++
        }
        answer = Math.max(answer,count);
    }
    return answer;
}

let arr=[[14, 18], [12, 15], [15, 20], [20, 30], [5, 15]];
console.log(solution(arr));