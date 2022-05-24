function solution(numbers){
    let answer = "NO";
    let flag = 0;
    const numbers_sum = numbers.reduce((a,b)=>a+b,0);

    function DFS(arr,start_idx){
        if (flag === 1) return;
        if(start_idx === numbers.length){
            let arr_sum = arr.reduce((a,b)=>a+b,0);
            if (arr_sum === (numbers_sum-arr_sum)){
                answer = "YES";
                flag = 1;
                console.log(arr);
            }
        }
        else{
            arr.push(numbers[start_idx]);
            DFS(arr,start_idx+1);
            arr.pop();
            DFS(arr,start_idx+1);
        }
    }
    DFS([],0);
    return answer;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));