function solution(str1, str2){
    let answer = "YES"
    let dict1 = str1.split("").reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur] || 0) + 1;
        return obj;
    },{})
    let dict2 = str2.split("").reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur] || 0) + 1;
        return obj;
    },{})

    console.log(dict1, dict2)
    for (let [k,v] of Object.entries(dict1)){
        if (dict1[k]!==dict2[k]) return "NO"
    }
    
    for (let [k,v] of Object.entries(dict2)){
        if (dict1[k]!==dict2[k]) return "NO"
    }
    return answer;
}

let a="abaCC";
let b="Caaab";
console.log(solution(a, b));