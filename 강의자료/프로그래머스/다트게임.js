function solution(dartResult) {
    var answer = 0;
    //FORMATTING
    let filtered_dartResult_list = [];
    for(let i = 0; i < dartResult.length; i++){
        if ("STD".includes(dartResult[i]) && !"#*".includes(dartResult[i+1])){
            filtered_dartResult_list.push(dartResult[i]);
            filtered_dartResult_list.push("-");
        }
        else{
            filtered_dartResult_list.push(dartResult[i]);
        }
    }
    dartResult = filtered_dartResult_list.join("");

    //PARSING
    let pure_score_list = dartResult.replace(/[SDT*#-]/g,",").split(",").filter(x=>x);
    let sdt_list = dartResult.split("").filter((x)=>"SDT".includes(x));
    let prize_list = dartResult.split("").filter((x)=>"#*-".includes(x));

    // console.log(pure_score_list);
    // console.log(sdt_list);
    // console.log(prize_list);
    // console.log(filtered_dartResult_list);

    let before_score = 0;
    for(let i = 0; i<3; i++){
        let prize = prize_list.shift();
        let sdt =  sdt_list.shift();
        let pure_score = Number(pure_score_list.shift());
        if (sdt==="S") pure_score = pure_score;
        else if (sdt==="D") pure_score = Math.pow(pure_score,2);
        else if (sdt==="T") pure_score = Math.pow(pure_score,3);

        if (prize==="-"){
            answer += pure_score;
            before_score = pure_score;
        }
        else if(prize==="#"){
            answer += (-1) * pure_score;
            before_score = (-1) * pure_score
        }
        else if (prize==="*"){
            answer += (before_score + 2*(pure_score));
            before_score = 2*(pure_score)
        }
        //console.log(before_score);
    }

    
    return answer;
}

console.log(solution("1S2D*3T"));
console.log(solution("1D2S#10S"));
