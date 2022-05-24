function solution(str1, str2){
    let answer = 0;
    let stdDcit = str2.split("").reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur]||0) +1;
        return obj;
    },{})

    let compDict = str1.slice(0,str2.length).split("").reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur]||0) +1;
        return obj;
    },{})
    //console.log(stdDcit,compDict)
    let lp = 0;
    for (let rp = lp+str2.length-1; rp < str1.length; rp++){
        //비교
        let flag = true
        for (let [k,v] of Object.entries(stdDcit)){
            if (compDict[k]!==stdDcit[k]) flag = false;
        }
        if (flag === true) answer++;
        //수정
        if(rp+1 >= str1.length) break;
        compDict[str1[rp+1]] = (compDict[str1[rp+1]] || 0) + 1;
        compDict[str1[lp]] = compDict[str1[lp]] - 1;
        lp++;
        //console.log(compDict)


    }
    return answer;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));
