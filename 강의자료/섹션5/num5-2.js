function solution(days, arr){
    let sum = 0;
    let lp = 0;
    for (let rp = lp + days -1; rp < arr.length; rp++){
        sum = Math.max(sum, arr.slice(lp,rp+1).reduce((a,b)=>a+b,0));
        lp++;
    }
    return sum;
}

let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));