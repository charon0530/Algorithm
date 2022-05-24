// function solution(people, limit) {
//     var answer = 0;
//     people.sort((a,b)=>a-b);
//     while(people.length){
//         let flag = 0;
//         let i;
//         for(i = people.length-1; i>0; i--){
//             if(people[0] + people[i] <= limit){
//                 flag = 1;
//                 break;
//             }
//         }
//         if(flag === 1){
//             people.splice(i,1);
//             people.shift();
//             answer +=1;
//             continue;
//         }
//         else{
//             break;
//         }
//     }

//     for(let x of people){
//         answer++;
//     }
//     return answer;
// }

function solution(people, limit){
    let answer = 0;
    people.sort((a,b)=>a-b);
    let lp = 0;
    let rp = people.length-1;
    while(lp<rp){
        if(people[lp] + people[rp] <= limit){
            lp++;
            rp--;
            answer++;
        }
        else{
            rp--;
            answer++;
        }
    }
    if(lp===rp){
        answer++;
    }
    return answer
}

console.log(solution([70,50,80,50],100));