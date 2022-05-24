
let combResult = []
function combination(source,target,n,r,count){
    if (r===0) combResult.push(target);
    else if(n<r) return;
    else{
        //n-rCr-1 해당 값을 넣었을 때
        target.push(source[count]); 
        combination(source, Object.assign([], target), n - 1, r - 1, count + 1); 
        //n-rCr 해당 값을 뺏을 때
        target.pop(); 
        combination(source, Object.assign([], target), n - 1, r, count + 1);
    }
}

function solution(needs, r) {
    let answer = 0;
    let compNum = needs[0].length;
    //모든 경우의수
    for(let i = 0; i < compNum-1; i++){
        for(let j=i+1;j<compNum;j++){
            let temp = [i,j];
            combination(temp,[],compNum-1,r,0);
        }
    }
    //console.log(combResult[0].indexOf(1)) // combResult[1] => i번조합식 
    //각 로봇 선택의 경우마다 계산
    let maxCount = 0;
    for (let i =0; i< combResult.length; i++){
        //i번 로봇 조합식일 때
        //console.log(combResult[i],"일때 작동")
        let count = 0;
        for (let j =0; j<needs.length;j++){
            //j번 조립식
            //console.log(needs[j], "조립식")
            let flag = true;
            for(let k=0; k<needs[j].length;k++){
                if (needs[j][k] === 1 && combResult[i].indexOf(k)===-1){
                    flag=false;
                    break;
                }
            }
            if (flag) count++;
            //console.log(count, maxCount);
        }
        maxCount=Math.max(maxCount,count);
        answer = maxCount;
    }
    return answer;
}

console.log(solution([ [ 1, 0, 0 ], [1, 1, 0], [1, 1, 0], [1, 0, 1], [1, 1, 0], [0, 1, 1] ]	,3))