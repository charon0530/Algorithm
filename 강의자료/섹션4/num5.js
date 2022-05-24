function solution(n, k, card){ // n = 카드 수 / k=k번째 수 / card는 n개의 카드
    let myArray =[];
    // 3중포문을 돌면서 모든 경우의 수 각각의 합을 리스트에 입력
    for (let i =0; i< card.length; i++){ // 첫번째 카드
        for (let j=i+1; j<card.length; j++){ //두번째카드
            for(let k=j+1; k<card.length; k++){ //세번째카드
                myArray.push(card[i]+card[j]+card[k]);
            }
        }
    }
    // 해당 리스트를 내림차순 정렬
    myArray = myArray.sort((a,b)=>b-a);
    //console.log(myArray)
    // 다음값과 달라질 때 카운트를 하며 해당 카운트가 k일때 그 값이 k번째 큰값임
    //let count=1;
    // for ( let i =0; i<myArray.length-1 ; i++){
    //     if (myArray[i] !== myArray[i+1]) count++;
    //     if(count === 3){
    //         answer = myArray[i+1];
    //         break;
    //     }
    // }
    //중복제거는 set을 이용한다.
    myArray = [...new Set(myArray)]
    return answer = myArray[k-1]
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
