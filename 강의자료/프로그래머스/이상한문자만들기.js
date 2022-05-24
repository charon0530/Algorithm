function solution(s) {
    var answer = [];
    
    function Change(str){
        let temp = '';
        for (let i = 0; i<str.length; i++){
            if (i%2===0) temp+=str[i].toUpperCase();
            else temp += str[i];
        }
        return temp;
    }
    s = s.split(' ').filter(x=>x);

    s.forEach(el=>{
        answer.push(Change(el));
    })
    return answer.join(' ');
}

console.log(solution("try hello  world"))