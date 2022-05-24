//구간이 커질수록 큐 뒷부분에 많은 소수들이 계속해서 누적되어있기 때문에 큐의 길이가 너무 길다.
function solution(n) {
    var answer = [];
    let queue = [];
    for (let i = 2; i<=n ; i++){
        queue.push(i);
    }
    let shift_time = 0;
    let filter_time = 0;

    let start = new Date();
    while(queue.length>0){
        let start_shift_time = new Date();
        let val = queue.shift();
        let end_shift_time = new Date();

        shift_time += (end_shift_time - start_shift_time)
        answer.push(val);

        let start_filter_time = new Date();
        queue = queue.filter((el)=>(el % val)!==0)
        let end_filter_time = new Date();

        filter_time += (end_filter_time - start_filter_time);
    }
    let end = new Date();

    console.log(" -> span time : ", end.getTime()-start.getTime());
    console.log("shift time : ", shift_time, " filter Time : ",filter_time);

    
    //console.log(answer)
    return answer.length;
}

console.log(solution(100000));