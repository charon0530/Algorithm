function solution(s){
    let answer = "YES";
    let edited_s = s.replace(/[^a-z^A-Z]/g,"").toLowerCase();
    let revered_s = edited_s.split("").reverse().join("");

    if (edited_s!==revered_s) answer="NO"

    return answer;
}

let str="found7, time: study; Yduts; emit, 7Dnuofs";
console.log(solution(str));