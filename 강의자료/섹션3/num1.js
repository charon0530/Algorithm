function solution(s){
    let answer="YES";
    s =s.toLowerCase();
    let right_arr = s.split("");
    let left_arr = [...right_arr].reverse();


    for (let i=0 ;i<right_arr.length; i++){
        if(right_arr[i] !== left_arr[i]){
            answer="NO"
        }
    }
    return answer;
}

let str="goooGd";
console.log(solution(str));