function solution(gift_cards, wants) {
    let answer = 0;
  
    
    for( let i =0; i< wants.length; i++){
        let target = wants[i];
        for(let j = i; j<gift_cards.length; j++){
            if (gift_cards[j]===target){
                if (i===j) break;
                //스왑
                else{
                    let temp = gift_cards[i];
                    gift_cards[i] = gift_cards[j];
                    gift_cards[j] = temp;
                }
            }
        }
    }
    for(let i = 0; i<wants.length; i++){
        if(wants[i]!==gift_cards[i]) answer++;
    }
    
    return answer;
}

console.log(solution([5, 4, 5, 4, 5],[1, 2, 3, 5, 4]));