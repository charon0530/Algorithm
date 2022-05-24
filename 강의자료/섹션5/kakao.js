function solution(info, query) {
    let answer = [];
    for(let i = 0 ; i <query.length; i++){
        let count = 0;
        let queryArr = query[i].split(" ").filter((str)=>(str!=="and"));
        let lang = queryArr[0];
        let where = queryArr[1];
        let time = queryArr[2];
        let soul = queryArr[3];
        let score = queryArr[4];
        //console.log(queryArr)

        for(let j = 0; j< info.length; j++){
            let infoArr = info[j].split(" ").filter((str)=>(str!=="and"));
            let ilang = infoArr[0];
            let iwhere = infoArr[1];
            let itime = infoArr[2];
            let isoul = infoArr[3];
            let iscore = infoArr[4];
            //console.log(infoArr)
            if ((lang==="-" || lang===ilang)&&(where==="-" || where===iwhere)&&(time==="-" || time===itime)&&(soul==="-" || soul===isoul)&&(score==="-" || Number(iscore)>=Number(score)))
                count++

        }
        answer.push(count);
    }
    return answer;
}

console.log(solution(["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"],
["- and - and - and - 150"]))