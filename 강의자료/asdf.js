function solution(lines){
    let answer = 0;
    let timeLine=[];
    //파싱하여 초단위로 바꾼다.
    for (let line of lines){
        let [date_str,times_str,dur_str] = line.split(" ");
        let [h,m,s] = times_str.split(":").map((v)=>Number(v));
        let dur_num = Number(dur_str.replace("s",""));
        //시작과 끝을 구한다
        let endtime = h*3600 + m*60 + s;
        let starttime = endtime - dur_num + 0.001;
        //TimeLine에 넣는다
        timeLine.push([starttime,endtime]);
    } 
    let dotTimeLine = [];
    //각 점으로부터 1초동안 해당되면 count한다
    for(let [s,e] of timeLine){
        dotTimeLine.push(s);
        dotTimeLine.push(e);
    }
    let temp = [];
    //최대 카운트를 구한다.
    for (let dot of dotTimeLine){
        let count = 0;
        for(let [s,e] of timeLine){
            if (dot === 3604.002){
                temp.push([dot,s,Number((dot+0.999).toFixed(3)),e,dot])
            }
            if (s <= Number((dot+0.999).toFixed(3)) && e >= dot){
                count++;
            }
        }
        answer = Math.max(answer, count);
    }
    console.log(temp);
    return answer;
}

console.log(solution(	["2016-09-15 01:00:04.002 2.0s", "2016-09-15 01:00:07.000 2s"]));