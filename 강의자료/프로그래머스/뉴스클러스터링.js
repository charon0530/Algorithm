function solution(str1, str2) {
    function makeDic(list){
        let tempDic = {};
        tempDic = list.reduce((obj,cur)=>{
            obj[cur] = (obj[cur]||0)+1
            return obj;
        },{});
        return tempDic;
    }
    var answer = 0;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    let A = [];
    let B = [];
    for (let i = 1; i < str1.length; i++){
        //소문자 확인
        let tempStr = str1.substr(i-1,2);
        if (tempStr.match(/[A-Za-z]{2}/)) {
            A.push(tempStr)
        }
    }
    
    for (let i = 1; i < str2.length; i++){
        //소문자 확인
        let tempStr = str2.substr(i-1,2);
        if (tempStr.match(/[A-Za-z]{2}/)) {
            B.push(tempStr)
        }
    }
 
    let Adict = makeDic(A);
    let Bdict = makeDic(B);

    let AandB = {};
    for (let key in Adict){
        if (Bdict[key] !== undefined){
            if (Adict[key]<=Bdict[key]){
                AandB[key] = Adict[key];
            }
            else{
                AandB[key] = Bdict[key];
            }
        }
    }
    let AorB = {...Adict};
    for (let key in Bdict){
        if (AorB[key] === undefined){
            AorB[key] = Bdict[key];
        }
        else{
            if(Bdict[key] > Adict[key]){
                AorB[key] = Bdict[key];
            }
        }
    }
    let and_size = 0;
    for (let value of Object.values(AandB)){
        and_size+=value;
    }
    let or_size = 0;
    for (let value of Object.values(AorB)){
        or_size+=value;
    }
    console.log(Adict)
    console.log(Bdict)

    console.log(and_size)
    console.log(or_size)
    if (and_size === or_size && or_size === 0){
        and_size = or_size = 1;
    }
    return answer = parseInt(65536 * and_size / or_size);
}

console.log(solution("aa1+aa2","AAAA12"));