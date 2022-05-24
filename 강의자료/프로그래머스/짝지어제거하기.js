function solution(s)
{
    var answer = -1;
    let tempString = [...s];

    while(true){
        let cur_val = "#";
        let flag = 0;
        if (tempString.length === 0) return 1;
        
        for(let i=0; i<tempString.length; i++){
            if (cur_val === tempString[i]){
                flag = 1;
                tempString.splice(i-1,2)
                console.log(tempString);
                break;
            }
            else{
                cur_val = tempString[i];
            }
        }
        if (flag===0) return 0;
    }
}
console.log(solution("aa"));