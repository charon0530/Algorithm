function getCount(character){
    return Math.min(Math.abs(character.charCodeAt()-"A".charCodeAt()), Math.abs(character.charCodeAt()-"Z".charCodeAt())+1)
}

function solution(name){
    let answer = 0;
    let cur_pos = 0;
    name = name.split("")
    let temp_name = "A".repeat(name.length).split("");
    
    if (temp_name.join("") === name.join(""))   return 0;
    
    while(true){
        //CHANGE
        if (temp_name[cur_pos] !== name[cur_pos]){
            answer += getCount(name[cur_pos]);
            temp_name[cur_pos] = name[cur_pos];
        }
        //CHECK
        if (temp_name.join("") === name.join("")) return answer;
        //MOVE
        let right_next_pos = cur_pos;
        let toRightCount = 0;
        while(true){
            right_next_pos++;
            if (right_next_pos === name.length) right_next_pos = 0;
            toRightCount++;
            if(temp_name[right_next_pos] !== name[right_next_pos]){
                break;
            }
        }
        
        let left_next_pos = cur_pos;
        let toLeftCount = 0;
        while(true){
            left_next_pos--;
            if (left_next_pos===-1) left_next_pos = name.length-1;
            toLeftCount++;
            if(temp_name[left_next_pos] !== name[left_next_pos]){
                break;
            }
        }
        if (toRightCount < toLeftCount){
            cur_pos = right_next_pos;
            answer += toRightCount;
        }
        else{
            cur_pos = left_next_pos
            answer += toLeftCount;
        }
    }
}

console.log(solution("ZZAAAZZ"));
