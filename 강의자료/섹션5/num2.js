function solution(arr1, arr2){
    arr1.push(...arr2);
    let resultArr=[];
    let dict = arr1.reduce((obj,num,idx)=>{
        obj[num] = (obj[num] || 0) +1;
        return obj;
    },{})

    for(let [k,v] of Object.entries(dict)){
        if(v>=2) resultArr.push(k);
    }
    resultArr = [...new Set(resultArr)].sort((a,b)=>a-b);
    resultArr.map((char)=>Number(char));
    return  resultArr.map((char)=>Number(char));
}

let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution(a, b));