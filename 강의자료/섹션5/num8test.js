function Compare(targetDict, initDict){
    if (Object.keys(targetDict).length !== Object.keys(initDict).length) return false;
    for (let [key,val] of Object.entries(targetDict)){
        if(initDict[key]===undefined || initDict[key] !== targetDict[key]) return false;
    }
    return true;
}

function solution(S, T){
    //기준 딕셔너리
    let targetDict = T.split("").reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur] || 0 )+1;
        return obj;
    },{});

    //초기 딕셔너리
    let initDict = S.split("").slice(0,T.length-1).reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur] || 0 )+1;
        return obj;
    },{});
    let lp = 0;
    for(let rp = T.length-1; rp <S.length; rp++){
        //초기 딕셔너리에 추가
        initDict[S[rp]] = (initDict[S[rp]] || 0)+1;
        //비교
        if(Compare(targetDict,initDict)){
            console.log(S.slice(lp,rp+1));
        };
        //lp 값 감소 및  lp증가
        initDict[S[lp]] -= 1;
        if (initDict[S[lp]]===0) delete initDict[S[lp]];
        lp++;
    }
}

let a="bacaAacbad";
let b="abc";
console.log(solution(a, b));