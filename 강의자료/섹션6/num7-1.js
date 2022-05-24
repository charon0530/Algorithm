function solution(std, str){

    let queue = std.split("");

    for(let x of str){
        if (queue.includes(x)){
            if(x !== queue.shift()) return 'NO'
        }
    }
    if (queue.length !== 0) return 'NO'
    return 'YES'
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));