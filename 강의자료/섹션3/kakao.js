function solution(new_id) {
    let answer = '';
    //1단계
    new_id = new_id.toLowerCase();
    //2단계
    new_id = new_id.replace(/[^a-z0-9-_.]/g,"")
    new_id = new_id.split("");
    //console.log(new_id)
    //3단계
    for (let i =0; i<new_id.length-1; i++){
        if((new_id[i] ===".") && (new_id[i]===new_id[i+1])){
            new_id[i]="";
        }
    }
    new_id = new_id.join("");
    //console.log(new_id)
    //4단계
    if(new_id[0]==="."){
        new_id=new_id.slice(1);
    }
    if(new_id[new_id.length-1]==="."){
        //console.log(new_id)
        new_id=new_id.slice(0,-1)
        
    }
    //console.log(new_id)
    //5단계
    if (new_id==="") new_id="a"

    //6단계
    if(new_id.length>=16){
        new_id = new_id.slice(0,15);
        
        if(new_id[new_id.length-1]==="."){
            new_id = new_id.slice(0,-1)
        }
    }
    //7단계
    
    if(new_id.length <=2){
        while(new_id.length<3){
            new_id+=new_id[new_id.length-1];
        }
    }
    console.log(new_id)
    return answer;
}

solution("abcdefghijklmn.p")