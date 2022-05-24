function getCount(character){
    return Math.min(Math.abs(character.charCodeAt()-"A".charCodeAt()), Math.abs(character.charCodeAt()-"Z".charCodeAt())+1)
}
function solution(name){
    let answer = 28*name.length;

    function DFS(start_idx,tempArr,count){
        if (count > answer) return;
        if (tempArr.join("")===name) {
            answer = Math.min(answer,count-1);
            return;
        }

        else{
            if (tempArr[start_idx] !== name[start_idx]){
                tempArr[start_idx] = name[start_idx];
                count += getCount(name[start_idx]);
            }
            let beforeArr = [...tempArr];
            //move right
            let right_next_idx = start_idx+1;
            if (right_next_idx === name.length) right_next_idx = 0;
            count++;
            DFS(right_next_idx,tempArr,count)
            tempArr = [...beforeArr];
            count--;
            //move left
            let left_next_idx = start_idx-1;
            if (left_next_idx === -1) left_next_idx = name.length-1;
            count++;
            DFS(left_next_idx,tempArr,count)
            tempArr = [...beforeArr];
            count--;
        }
    }
    DFS(0,"A".repeat(name.length).split(""),0)
    return answer;
}

console.log(solution("JAZ"))