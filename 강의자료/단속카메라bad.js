function solution(routes) {
    let answer = 0;
    // routes를 end기준으로 sort
    routes = routes.sort((a,b)=>a[1]-b[1]);
    // 1. 가장 많이 중복되는것을 찾는다.
    while(routes.length){
        let maxCount = 0;
        let tmp_end=Number.MIN_SAFE_INTEGER;
        for(let [start,end] of routes){
            let tmp_count = 0;
            for(let x of routes){
                if(x[0]>end) break;
                if(x[0]<=end && x[1]>=end){
                    tmp_count++;
                }
            }
            if(tmp_count > maxCount){
                maxCount = tmp_count;
                tmp_end = end;
            }
        }
        // 2. 그점에 해당되는 부분을 지운다. count++
        //console.log(tmp_end);
        //console.log(routes);

        routes = routes.filter((line)=>{
            if(!(line[0]<=tmp_end && line[1]>=tmp_end)){
                return true;
            }
        });
        answer++;
        console.log(routes);
    }
    // 0개가 남을때까지 한다.
    return answer;
}
console.log(solution([[1,14],[2,4],[5,7],[8,10],[11,13]]));
