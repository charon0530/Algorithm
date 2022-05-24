function solution(n){
    let answer;
    let das = 12;
    let moc = parseInt(n / 12);
    if (n%12 !==0) moc+=1;
    answer=moc;
    return answer;
}

console.log(solution(24));