function solution(n, times) {
    var answer = 0;
    let p = times.length;
    let list = [];
    for (let i = 0 ; i<= n; i++){
        for(let j = 0; j <times.length; j++){
            list.push(times[j] * i)
        }
    }
    list.sort((a,b)=>a-b);

    console.log(list);
    return list[p+n-1];
}

console.log(solution(6,[7,10]))