function solution(day, arr){
    let answer=0;//위반 자동차 수
    let lastNumArray = arr.map((number)=>(number%10));
    for (let num of lastNumArray){
        if(num===day) answer+=1;
    }
    return answer;
}

arr=[12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));