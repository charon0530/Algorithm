function solution(n, words) {
    var answer = [0,0];
    let people = Array.from({length:n}, () => new Array());
    let before = [];
    let lastWord = words[0][0];
    for (let i = 0; i<words.length; i++){
        if (before.includes(words[i]) ||
            words[i][0] !== lastWord[lastWord.length-1]){
            answer = [(i%n)+1,people[i%n].length+1];
            break;
        }
        people[i%n].push(words[i]);
        before.push(words[i])
        lastWord = words[i];
    }

    return answer;
}

console.log(solution(2,	["hello", "one", "even", "never", "now", "world", "draw"]))