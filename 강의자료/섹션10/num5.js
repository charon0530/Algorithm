function solution(m, arr){
    // dy[i] = i분 경우 최대 점수
    let dy = new Array(m+1).fill(0);
    
    for (let [score, time] of arr){
        for (let j=m; j>=time; j--){
            dy[j] = Math.max(dy[j], dy[j-time]+score);
        }
    }
    //dy[i] = Math.max(dy[i], dy[i-현재문제 시간]+그 문제 스코어)
    return dy[m];
}

let arr=[[10, 5], [25, 12], [15, 8], [6, 3], [7, 4]];
console.log(solution(24, arr));