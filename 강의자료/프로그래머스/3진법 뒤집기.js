function solution(n) {
    var answer = 0;
    let t = [];
    t = n.toString(3).split("");
    let rev_t = Number(t.reverse().join(""))
    answer = parseInt(rev_t,3)
    return answer;
}