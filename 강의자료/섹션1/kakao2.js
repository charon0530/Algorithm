function solution(p) {
    let answer = '';
    if (p==="") return "";

    let left_count=0;
    let right_count=0;
    let i=1;
    let j=1;
    if(p[0]==='(') {
        left_count++;
        for(i=1; left_count!==right_count ;i++){
            if(p[i]==='(') left_count++;
            else right_count++
        }
        let v = p.slice(i,p.length);

        answer = p.slice(0,i)+solution(v);
    }

    else {
        right_count++;
        for(j=1; left_count !== right_count; j++){
            if(p[j]==='(') left_count++;
            else right_count++
        }
        
        let edit_str = "(";
        let v = p.slice(j,p.length);
        
        edit_str = edit_str + solution(v) + ")"
        let u = p.slice(0,j);
        let edit_u = p.slice(1,j-1);

        let temp = "";
        for (let x of edit_u){
            if (x==="(") temp+=")"
            else temp+="("
        }

        edit_str += temp;
        return edit_str;
    }
    

    return answer;
}


console.log(solution("()))((()"))