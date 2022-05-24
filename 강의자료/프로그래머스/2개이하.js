function solution(numbers) {
    var answer = [];
    numbers.forEach((number)=>{
        let number_2 = parseInt(number.toString(2));
        if (number % 2 === 0){
            answer.push(number+1);
        }
        else{
            number_2 = "0".concat(number.toString(2));


            let i
            for(i = number_2.length-1; i>= 0; i--){
                if(number_2[i] === "0"){
                    let temp_number_2 = number_2.split("");
                    temp_number_2[i] = 1;
                    number_2 = temp_number_2.join("");
                    break;
                }
            }

            let temp_number_2 = number_2.split("");
            temp_number_2[i+1] = 0;
            number_2 = temp_number_2.join("");


            
            answer.push(parseInt(number_2,2));
        }
    });
    return answer;
}