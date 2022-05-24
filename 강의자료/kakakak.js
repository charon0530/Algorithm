function solution(begin, target, words) {
    let answer = 0;
    let n = begin.length; //ㅁㅁㅁ...개수
    let caseArr = Array.from({length:n},()=>new Set());
    for(let i= 0; i<n; i ++){
        for(let word of words){
            caseArr[i].add(word[i]);
        }
    }
    let temp = new Array(n);
    //DFS
    function DFS(start_idx,count){
        if(start_idx === n){
            console.log(temp.join(""),count);
            if(temp.join("") === target) answer = count+1;
            else answer = 0;
        }
        else{
            for(let x of caseArr[start_idx]){
                if(begin[start_idx] === x){
                    temp[start_idx] = x;
                    DFS(start_idx+1,count);
                }
                else{
                    temp[start_idx] = x;
                    DFS(start_idx+1,count+1);
                }
            }
        }
    }
    console.log(caseArr);
    DFS(0,0);
    return answer;
}

console.log(solution("hit","cog",["hot", "dot", "dog", "lot", "log", "cog"]	))