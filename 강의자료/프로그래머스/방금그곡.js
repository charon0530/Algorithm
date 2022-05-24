function Modify(str){
    let modified_str = '';
    let i = 0;
    for (i = 0; i<str.length-1; i++){
        if (str[i]==='#') continue;

        if (str[i+1] !== '#') modified_str += `${str[i]}0`;
        else modified_str += `${str[i]}#`;
    }
    if (str[i] !== '#') modified_str += `${str[i]}0`;

    return modified_str;
}

function solution(m, musicinfos) {
    var answer = [-1,''];
    let modified_m = Modify(m);

    musicinfos.forEach(musicinfo=>{
        let [start_time, end_time, title, info] = musicinfo.split(',');
        let [start_h,start_m] = start_time.split(':').map((x)=>Number(x));
        let [end_h,end_m] = end_time.split(':').map((x)=>Number(x));
        let term =  ((end_h * 60) + end_m) - ((start_h * 60) +start_m);

        let play = '';
        let modified_info = Modify(info);

        for (let i = 0; i < term*2; i=i+2){
            play+=modified_info[i%modified_info.length]+modified_info[(i+1)%modified_info.length];
        }

        if (play.includes(modified_m)){
            if (term > answer[0]) answer = [term,title];
        }
    });
    if (answer[1]==='') return '(None)'
    return answer;
}

console.log(solution("ABCDEFG",	["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]));