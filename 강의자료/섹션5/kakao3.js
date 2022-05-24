let infoDict={}
function makeDict(key,start,score){ //재귀함수는 매개변수가 중요하다
    if(start === key.length){
        let strKey = key.join("")
        if(infoDict[strKey]) infoDict[strKey].push(score);
        else infoDict[strKey] = [score];
        return;
    }
    //안바뀔때
    makeDict(key,start+1,score);
    //바뀔때
    let temp = key.slice();
    temp[start] = "-"
    makeDict(temp,start+1,score);
}

function solution(info, query) {
    let answer = [];
    
    for (let i = 0; i < info.length; i++){
        let infoArr = info[i].split(" ");
        //let key = infoArr.slice(0,infoArr.length-1);
        let score = Number(infoArr.pop());
        makeDict(infoArr,0,score);   
    }
    for (const key in infoDict) {
        infoDict[key] = infoDict[key].sort((a, b) => a - b);
    }
    //console.log(infoDict);
    for (let i = 0; i< query.length; i++){
        let queryArr = query[i].split(" ").filter((str)=>(str!=="and"));
        let score = Number(queryArr.pop());
        let strKey = queryArr.join("");
        
        if (!infoDict[strKey]) {answer.push(0); continue;}
        let scoreArr = infoDict[strKey];
        if(scoreArr[scoreArr.length-1]<score){answer.push(0); continue;} //여기서 막혔엇음 < 인데 <=로함
        //이진탐색
        let start = 0;
        let end = scoreArr.length-1
        while (start<end){
            let mid = Math.floor((start+end)/2);
            if(scoreArr[mid]>=score){
                end = mid;
            }
            else{
                start = mid +1;
            }
        }
        answer.push(scoreArr.length-start);
    }

    return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],
["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"]))