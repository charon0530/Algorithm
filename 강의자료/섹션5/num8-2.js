function solution(str1, str2){
    let answer = 0;
    let stdDcit = str2.split("").reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur]||0) +1;
        return obj;
    },{})
    //이전값 셋팅
    let compDict = str1.slice(0,str2.length-1).split("").reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur]||0) +1;
        return obj;
    },{})
    //console.log(stdDcit,compDict)
    let lp = 0;   
    for (let rp = str2.length-1; rp < str1.length; rp++){
        //수정
        compDict[str1[rp]] = (compDict[str1[rp]] || 0) + 1;
        
        //비교
        let flag = true
        for (let [k,v] of Object.entries(stdDcit)){
            if (compDict[k]!==stdDcit[k]) flag = false;
        }
        if (flag === true) answer++;
        //console.log(compDict)

        compDict[str1[lp]] = compDict[str1[lp]] - 1;
        lp++
        
    }
    return answer;
}

let a="bacaAacbad";
let b="abc";
console.log(solution(a, b));