function solution(record){
    let answer = [];
    let idToNick = {};
    record.forEach((rec)=>{
        let action = rec.split(" ")[0];
        let u_id = rec.split(" ")[1];
        let nick = rec.split(" ")[2];
        if (action === "Enter"){
            idToNick[u_id] = nick;
        }
        else if (action=== "Leave"){

        }
        else if ( action==="Change"){
            idToNick[u_id] = nick;
        }
        else {
            console.log("error");
        }
    });

    record.forEach((rec)=>{
        let action = rec.split(" ")[0];
        let u_id = rec.split(" ")[1];
        let nick = rec.split(" ")[2];
        if (action === "Enter"){
            answer.push(idToNick[u_id]+"님이 들어왔습니다.")
        }
        else if (action=== "Leave"){
            answer.push(idToNick[u_id]+"님이 나갔습니다.")
        }
        else if ( action==="Change"){
            
        }
        else {
            console.log("error");
        }
    });
    return answer
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))