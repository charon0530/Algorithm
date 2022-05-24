function solution(p) {
    let answer = '';
    if (p==="") return "";

    let left_count=0;
    let right_count=0;
    let pivot=1;
  
    if(p[0]==='(') {
        left_count++;
        for(pivot=1; left_count!==right_count ;pivot++){
            if(p[pivot]==='(') left_count++;
            else right_count++
        }
        let v = p.slice(pivot,p.length);

        answer = p.slice(0,pivot)+solution(v);
    }

    else {
        right_count++;
        for(pivot=1; left_count !== right_count; pivot++){
            if(p[pivot]==='(') left_count++;
            else right_count++
        }
        
        let edit_str = "(";
        let v = p.slice(pivot,p.length);
        
        edit_str = edit_str + solution(v) + ")"
        let u = p.slice(0,pivot);
        let edit_u = p.slice(1,pivot-1);

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