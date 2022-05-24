function solution(n,r){
    // ㅁㅁ
    let temp = new Array(r).fill(0);
    let result = [];
    //조합 구하는 함수
    function comb(start_idx, start_val){
        if(start_idx === temp.length){
            result.push([...temp]);
        }
        else{
            for(let i = start_val; i <=n; i++){
                temp[start_idx] = i;
                comb(start_idx+1, i+1);
            }
        }
    }
    comb(0,1);
    return result;
}

console.log(solution(4,2));