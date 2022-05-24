function isPrime(n){
    let r = 1;
    if(n===1) return 0;
    for(let i= 2; i<=parseInt(n/2);i++) if(n%i === 0) r=0;
    return r;
}
function solution(numbers) {
    var answer = 0;
    let result = new Set([]);
    let temp = [];
    let ch = new Array(numbers.length).fill(0);

    //DFS
    function DFS(start_idx){
        if(start_idx < numbers.length){
            for(let i=0;i<numbers.length;i++){
                if(ch[i] === 0){
                    ch[i]=1;
                    temp.push(numbers[i]);
                    result.add(Number([...temp].join("")));
                    DFS(start_idx+1);
                    ch[i]=0;
                    temp.pop();
                }
            }
        }
    }
    DFS(0);
    if(result.has(0)) result.delete(0);
    console.log((result));
    for(let x of result){
        if(isPrime(x)===1) answer++;
    }
    return answer;
}

console.log(solution("011"));