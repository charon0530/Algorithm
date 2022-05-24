function solution(n, arr){
    let answer;
    let dict={};
    let result = []
    for (let i=0; i<n; i++){
        dict[arr[i]] = getSum(arr[i]);
    }
    let MAX = Math.max(...Object.values(dict));
    for (let [k,v] of Object.entries(dict)){
        if (v===MAX) result.push(k)
    }
    for(let i=0; i<result; i++){
        result[i] = parseInt(result[i])
    }
    answer = (result.sort((a,b)=>b-a)[0]);
    
    return answer;
}

function getSum(num){
    let sum=0;
    let num_arr = num.toString().split("")
    for (let i =0; i<num_arr.length; i++){
        num_arr[i]=parseInt(num_arr[i])
    }
    num_arr.forEach(num=>{sum+=num});
    return sum;
}

let arr=[128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));