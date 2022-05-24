
function solution(arr){
    let answer=[];
    let oddArr = arr.filter((num)=>{return num%2 ===1});
    let sum = 0;
    oddArr.forEach(oddNum => {
        sum+=oddNum;
    });
    let min = Math.min(...oddArr);
    answer = [sum, min];
    return answer;
}

arr=[12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));