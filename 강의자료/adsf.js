function solution(progresses, speeds) {
    var answer = [];
    function TakeDays(progress, speed){
        let days=99999;
        for(let i=0; i<=100; i++){
            if((progress + (i*speed)) >= 100){
                days=i;
                break;
            }
        }
        return days;
    }
    if(progresses.length===0) return 0;
    
    let stack = [];
    let cur_val = TakeDays(progresses[0],speeds[0]);
    stack.push(TakeDays(progresses[0],speeds[0]));
    if(progresses.length===1){
        return stack.pop();
    }
    else{
        for(let i =1; i<progresses.length; i++){
            if(TakeDays(progresses[i],speeds[i]) <= cur_val){
                stack.push(TakeDays(progresses[i],speeds[i]));
            }
            else{
                answer.push(stack.length);
                console.log(stack);
                stack = [];
                stack.push(TakeDays(progresses[i],speeds[i]));
                cur_val = TakeDays(progresses[i],speeds[i]);
            }
        }
    }
    if(stack.length !==0){
        answer.push(stack.length);
        console.log(stack);
    }
    return answer;
}

console.log(solution([95, 90, 99, 99, 80, 99],[1,1,1,1,1,1]));








10
3
4
5
6
7



1
1
1
3