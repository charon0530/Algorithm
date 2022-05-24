function solution(s){
    let count = 0;
    let z_count=0;
    while(s!=="1"){
        count++;
        //step 1
        s = [...s].filter((x)=>{
            if (x==="0") z_count++;
            return x!=="0"
        }).join("").length.toString(2);
    }
    return [count,z_count];
}

console.log(solution("110010101001"));