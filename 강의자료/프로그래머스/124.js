function solution(n) {
    var answer = '';
    
    let temp=[];
    while(n!==0){
        let moc = parseInt(n/3);
        let na = n%3;
        if(na!==0) {
            temp.unshift(na);
            n = moc;
        }
        else{
            temp.unshift(4);
            n=moc-2;
        }
    }
    answer = temp.join("");
    return answer;
}
console.log(solution(13));