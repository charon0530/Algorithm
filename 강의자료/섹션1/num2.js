function solution(a, b, c){
    let answer="YES", max;
    let myArr =[];
    myArr.push(a,b,c);
    myArr.sort((x,y)=>x-y);
    if(!(myArr[2] < myArr[0]+ myArr[1])){
        answer="NO"
    }
    return answer;
}

console.log(solution(6,7,11));