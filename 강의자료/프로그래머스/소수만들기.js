function isPrime(num){
    for (let i = 2; i<=parseInt(Math.sqrt(num)); i++){
        if (num%i===0) return false;
    }
    return true;
}
function solution(nums) {
    var answer = 0;
    
    function DFS(start_idx,tempArr){
        if (tempArr.length >3) return;
        if (start_idx === nums.length){
            if(tempArr.length===3){
                let sum = tempArr.reduce((a,b)=>a+b,0);
                if (isPrime(sum)=== true) {
                    answer++;
                    console.log(tempArr)
                }
            }
        }
        else{
            tempArr.push(nums[start_idx]);
            DFS(start_idx+1,tempArr);
            tempArr.pop();
            DFS(start_idx+1,tempArr);
        }
    }
    DFS(0,[]);
    return answer;
}

console.log(solution([1,2,3,4]));