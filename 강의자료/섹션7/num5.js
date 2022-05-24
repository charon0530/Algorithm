function solution(cacheLength,arr){
    let cache = new Array(cacheLength).fill(0);
    let N = arr.length;
    
    for (x of arr){
        // 1. 값이 캐시에 있는지 확인
        let idx=cache.indexOf(x)
        if (idx!==-1){
            // 1-1 있다면 해당 값을 앞으로 이동 = 해당 값 앞의 값들을 하나씩 뒤로
            let temp = cache[idx];
            for (let j = idx-1; j>=0; j--){
                cache[j+1] = cache[j];
            }
            cache[0]=temp;
        }
        else{
            // 1-2 없다면 팝하고 언쉬프트로 앞에 집어넣음
            cache.pop();
            cache.unshift(x);
        }
        console.log(cache);
    }
}

let arr=[1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));