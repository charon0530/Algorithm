function solution(items,maxW){
    //DP사용할거임
    //dy[i] = i무게일 때 최대 값
    let dy = new Array(maxW+1).fill(0);
    //한번씩임으로 뒤에서부터
    for (let [weight, value] of items){
        for(let i = maxW; i>=weight; i--){
            dy[i] = Math.max(dy[i], dy[i-weight]+value);
        }
        console.log(dy);
    }
    return dy[maxW];
}


let arr = [[2,3],[3,4],[4,5],[5,6]];
console.log(solution(arr,5))