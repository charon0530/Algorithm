function solution(w, h){
    let count = 0;
    if (w<h){
        let temp = h;
        h = w;
        w = temp;
    }
    let a = h/w;
    
    for(let i = 0 ; i < w; i++){
        //큰값 올림 - 작은값 내림 = 개수
        count += Math.ceil(a*(i+1)) - Math.floor(a*i)
    }
    return w*h - count;
}

function solution2(w,h){
    const gcd = (a, b) => {
        return b === 0 ? a : gcd(b, a % b);
    };

    return w * h - (w + h - gcd(w, h));
}

console.log(solution(2,98));
console.log(solution2(2,98));

