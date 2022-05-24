let pad = {};
pad[1] = [1,1];
pad[2] = [1,2];
pad[3] = [1,3];
pad[4] = [2,1];
pad[5] = [2,2];
pad[6] = [2,3];
pad[7] = [3,1];
pad[8] = [3,2];
pad[9] = [3,3];
pad[-1] = [4,1];
pad[0] = [4,2];
pad[-2] = [4,3];

function getDistance(a,b){
    return Math.abs(pad[a][0]-pad[b][0])+Math.abs(pad[a][1]-pad[b][1])
}

function solution(numbers, hand) {
    var answer = '';
    let cur_left=-1;
    let cur_right=-2;

    numbers.forEach((num)=>{
        if (num===1 || num===4 || num ===7){
            answer+="L";
            cur_left = num;
        }
        else if(num===3|| num===6 || num ===9){
            answer+="R";
            cur_right = num;
        }
        else{
            if (getDistance(num,cur_left) < getDistance(num,cur_right)){
                answer+="L";
                cur_left = num;
            }
            else if(getDistance(num,cur_left) > getDistance(num,cur_right)){
                answer+="R";
                cur_right = num;
            }
            else{
                if (hand==="left"){
                    answer+="L";
                    cur_left = num;
                }
                else{
                    answer+="R";
                    cur_right = num;
                }
            }       
        }
        
    });
    //거리는 차이 나누기 3
    return answer;
}