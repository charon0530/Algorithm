function solution(places) {
    let answer = [];
    places.forEach((place)=>{
        //padding
        for(let i=0; i <place.length; i++){
            place[i] = `**${place[i]}**`
        }
        place.push('*********');
        place.push('*********');


        console.table(place);
        let flag = 1;
        for (let row = 0; row < place.length; row++){
            for (let col = 2; col < place[0].length; col++){
                if (place[row][col]!=="P") continue;
                
                let right = place[row][col+1];
                let d_right = place[row][col+2];
                let left = place[row][col-1];
                let d_left = place[row][col-2];
                let down = place[row+1][col];
                let d_down = place[row+2][col];
                let right_down = place[row+1][col+1];
                let left_down = place[row+1][col-1];

                if(right==='P' || down==='P'||left === 'P') flag = 0;
                if(d_right === 'P'){
                    if (right !== 'X') flag = 0;
                }
                if(d_left === 'P'){
                    if (left !== 'X') flag = 0;
                }
                if(d_down === 'P'){
                    if (down !== 'X') flag = 0;
                }

                if(right_down==='P'){
                    if (right !== 'X' || down !== 'X') flag = 0;
                }
                if(left_down === 'P'){
                    if (left !== 'X' || down !== 'X') flag = 0;
                }
                if (flag === 0){
                    row = place.length+1
                    col = place[0].length+1
                }
            }
        }
        answer.push(flag);
    })
    return answer;
}

console.log(solution([["OOPOO", "OPOOO", "OOOOO", "OOOOO", "OOOOO"]]))