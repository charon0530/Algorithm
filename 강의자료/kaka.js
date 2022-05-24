function solution(lines){
    let answer = 0;
    let timeline = [];
    for(let line of lines){
        let [date,time,duration] = line.split(" ");
        let durTime = Number(duration.replace("s",""));
        let [h,m,s] = time.split(":").map((v)=>Number(v));
        let d = parseInt(date.split("-")[2]);
        let end = (d*3600*24+h*3600+m*60+s);
        let start = Number((end - durTime + 0.001));

        timeline.push([start,end]);
    }
    let dotTime = [];
    for (let x of timeline){
        dotTime.push(x[0]);
        dotTime.push(x[1]);
    }
    let temp=[];
    for(let x of dotTime){
        let count = 0;
        let s = x;
        let e = s+1;

        for(let y of timeline){
            if(y[0] <= e && y[1] >= s) {
                temp.push([s,y])
                count++;
            }
        }
        answer = Math.max(answer, count);
    }
    return answer;
}


console.log(solution([
    "2016-09-15 20:59:57.421 0.351s",
    "2016-09-15 20:59:58.233 1.181s",
    "2016-09-15 20:59:58.299 0.8s",
    "2016-09-15 20:59:58.688 1.041s",
    "2016-09-15 20:59:59.591 1.412s",
    "2016-09-15 21:00:00.464 1.466s",
    "2016-09-15 21:00:00.741 1.581s",
    "2016-09-15 21:00:00.748 2.31s",
    "2016-09-15 21:00:00.966 0.381s",
    "2016-09-15 21:00:02.066 2.62s"
    ]));