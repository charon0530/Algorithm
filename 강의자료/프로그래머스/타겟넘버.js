function solution(numbers, target) {
    var answer = 0;
    
    function DFS(start_idx,tempArr){
        if (start_idx === numbers.length){
            let sum = tempArr.reduce((a,b)=>a+b,0);
            if (sum === target) {
                console.log(tempArr);
                answer++;
            }
        }
        else{
            tempArr.push(numbers[start_idx]);
            DFS(start_idx+1,tempArr);
            tempArr.pop();
            
            tempArr.push(numbers[start_idx] * (-1))
            DFS(start_idx+1, tempArr);
            tempArr.pop();
        }
    }
    DFS(0,[]);
    return answer;
}

console.log(solution([1,1,1,1,1],3));