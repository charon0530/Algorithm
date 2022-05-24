function solution(s) {
    let answer = s.length;
    for(let term=1; term<=Math.floor(s.length/2); term++){
        //비교하고 있는 스트링의 시작과 끝의 인덱스
        let count = 0;
        let tempArr=[]
        let startIdx = 0;
        let endIdx = startIdx + term -1
        let stdStr = s.slice(startIdx,endIdx+1);
        while(endIdx<s.length){
            if(stdStr===s.slice(startIdx,endIdx+1)){
                count++;
            }else{
                if(count!==1) tempArr.push(count);
                tempArr.push(stdStr);

                stdStr=s.slice(startIdx,endIdx+1);
                count=1;
            }
            startIdx=endIdx+1;
            endIdx=startIdx+term-1;
        }
        if(count!==1) tempArr.push(count);
        tempArr.push(stdStr);

        if (startIdx<s.length){
            for ( let j=startIdx; j<s.length;j++){
                tempArr.push(s[j]);
            }
        }
        let finalcount=(tempArr.toString().replace(/,/g,"")).length;
        if (finalcount<answer) answer=finalcount;
    }
    return answer;
}
console.log(solution("xababcdcdababcdcd"))