function solution(arr){
    let answer = "";
    let dict = arr.split("").reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur]||0) + 1;
        return obj
    },{})
    let maxNum =0;
    for (let [k,v] of Object.entries(dict)){
        if (v>maxNum) {
            maxNum=v;
            answer = k;
        }
    }
    return answer;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));