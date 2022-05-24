function solution(participant, completion) {
    var answer = '';
    let chlist = participant.reduce((obj,cur,idx)=>{
        obj[cur] = (obj[cur]||0) + 1;
        return obj;
    },{});

    for(let x of completion){
        chlist[x] -= 1;
    }
    for (let [key,value] of Object.entries(chlist)){
        if (value === 1) return key;
    }
}
// function solution(participant, completion) {
//     var answer = '';

//     participant.sort();
//     completion.sort();
//     for(let i=0; i<completion.length; i++){
//         if(participant[i]!==completion[i]){
//             return participant[i];
//         }
//     }
//     return participant[participant.length-1];
// }

console.log(solution(["mislav", "stanko", "mislav", "ana"],["stanko", "ana", "mislav"]));