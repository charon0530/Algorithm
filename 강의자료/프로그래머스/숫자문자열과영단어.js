function solution(s) {
    var answer = 0;
    let dic = {
        "zero"  : 0,
        "one"   : 1,
        "two"   : 2,
        "three" : 3,
        "four"  : 4,
        "five"  : 5,
        "six"   : 6,
        "seven" : 7,
        "eight" : 8,
        "nine"  : 9,	
    };

    for (let [key,val] of Object.entries(dic)){
        let reg = new RegExp(`${key}`,"g"); 
        s = s.replace(reg,val);
    }
    return s;
}

console.log(solution("one4seveneight"))