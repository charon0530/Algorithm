function solution(msg) {
    var answer = [];
    //1. init dic {word : index}
    let dic = {};
    for (let i = 1; i<=26; i++){
        dic[String.fromCharCode(64+i)] = i;
    }
    //console.log(dic);
    let dic_idx = 27;

    for(let i = 0; i < msg.length;){
        let key_list = Object.keys(dic);
        let before_input = "";
        let input = msg[i];
        let input_idx = i;

        while(true){
            if (key_list.includes(input)){
                before_input = input;
                input = input + msg[++input_idx];
            }
            else{
                break;
            }
        }

        dic[input] = dic_idx++;
        
        answer.push(dic[before_input]);
        i+=before_input.length;
    }
    return answer;
}

console.log(solution("ABABABABABABABAB"))