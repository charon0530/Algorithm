function solution(n, arr1, arr2) {
    var answer = Array.from({length:n},()=>new Array(n).fill(0));
    let map1 = Array.from({length:n},()=>new Array(n).fill(0));
    let map2 = Array.from({length:n},()=>new Array(n).fill(0));
    
    //CREATE MAP1
    for(let i = 0; i<arr1.length; i++){
        let num = arr1[i];
        let numToBin_str = num.toString(2);
        while(numToBin_str.length < n){
            numToBin_str = "0"+numToBin_str;
        }
        
        for(let j = 0; j<numToBin_str.length;j++){
            if(numToBin_str[j]==="1"){
                map1[i][j] = "#";
            }
            else{
                map1[i][j] = " ";
            }
        }
    }

    //CREATE MAP2
    for(let i = 0; i<arr2.length; i++){
        let num = arr2[i];
        let numToBin_str = num.toString(2);
        while(numToBin_str.length < n){
            numToBin_str = "0"+numToBin_str;
        }
        for(let j = 0; j<numToBin_str.length;j++){
            if(numToBin_str[j]==="1"){
                map2[i][j] = "#";
            }
            else{
                map2[i][j] = " ";
            }
        }
    }

    for (let r = 0; r<n; r++){
        for (let c = 0; c< n; c++){
            if (map1[r][c] === " " && map2[r][c]===" ")
                answer[r][c] = " ";
            else{
                answer[r][c] = "#";
            }
        }
    }
    for(let i = 0; i <answer.length; i++){
        answer[i] = answer[i].join("");
    }
    return answer;
}

console.log(solution(5,[9,20,28,18,11],[30,1,21,17,28]))