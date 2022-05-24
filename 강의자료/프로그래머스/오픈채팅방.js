function solution(record) {
    var answer = [];
    let log =[];
    let dic = {};
    
    record.forEach(rec => {
        
        let doing = rec.split(" ")[0];
        let u_id = rec.split(" ")[1];
        let nick = rec.split(" ")[2];
        
        if (doing === "Enter"){
            if (dic[u_id] !== nick){
                //로그를 바꾼다
                for (let i = 0; i< log.length; i++){
                    let log_u_id = (log[i].split(":")[0]);
                    let log_nick = dic[log_u_id];
                    
                    if(log_u_id === u_id){
                        log[i] = log[i].split(":")[0]+":"+log[i].split(":")[1].replace(log_nick, nick);
                        //console.log("test",log[i].split(":")[0]+log[i].split(":")[1].replace(log_nick, nick))
                    }
                }
                dic[u_id] = nick;
            }
            //이후
            log.push(u_id+":"+nick+"님이 들어왔습니다.")
        }
        else if (doing === "Leave"){
            log.push(u_id+":"+dic[u_id]+"님이 나갔습니다.")
        }
        else if (doing === "Change"){
            if (dic[u_id] !== nick){
                for (let i = 0; i< log.length; i++){
                    let log_u_id = (log[i].split(":")[0]);
                    let log_nick = dic[log_u_id];
                    
                    if(log_u_id === u_id){
                        log[i] = log[i].split(":")[0]+":"+log[i].split(":")[1].replace(log_nick, nick);
                    }
                }
                dic[u_id] = nick;

            }
        }
        else{
            console.log("error");
        }
    });
    for(let i = 0; i<log.length;i++){
        answer.push(log[i].split(":")[1]);
    }
    return answer;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]));