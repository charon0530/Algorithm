function solution(dirs) {
    var answer = 0;
    let roads = [];
    let cur_x = 0;
    let cur_y = 0;
    for (let i = 0; i < dirs.length; i++){
        let next_x = cur_x;
        let next_y = cur_y;
        if (dirs[i]==="U"){
            next_y = cur_y + 1
        }
        else if(dirs[i] === "D"){
            next_y = cur_y - 1
        }
        else if(dirs[i] === "R"){
            next_x = cur_x +1;
        }
        else if(dirs[i] === "L"){
            next_x = cur_x - 1;
        }

        if (next_x < -5 || next_x > 5 || next_y < -5 || next_y > 5) continue;

        roads.push(""+cur_x+cur_y+next_x+next_y);
        roads.push(""+next_x+next_y+cur_x+cur_y);
        cur_x = next_x;
        cur_y = next_y;
        
    }

    roads = [...new Set(roads)];
    console.log(roads);
    answer = roads.length/2;
    return answer;
}

console.log(solution("ULURRDLLU"));