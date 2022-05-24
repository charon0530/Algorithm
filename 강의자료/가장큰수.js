function solution(numbers) {
    var answer = '';
    let strArr = numbers.map((v)=>""+v);
    strArr.sort((a,b)=>{
        return Number(b+a) - Number(a+b);
    })
    return strArr.join("")
}

console.log(solution([3, 30, 34, 5, 9]));