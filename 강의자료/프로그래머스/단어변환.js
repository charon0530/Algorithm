function solution(begin, target, words) {
    let answer = Number.MAX_SAFE_INTEGER;

    //하나만 다른 목록들을 구해내는 함수가 필요
    function getList(std,sources){
        let temp = [];
        for (let source of sources){
            let count = 0;
            for(let i=0; i<std.length; i++){
                if(std[i]!==source[i]) count++
            }
            if(count === 1) temp.push(source);
        }
        return temp;
    }

    let chlist = words.reduce((obj,cur,idx)=>{
        obj[cur] = 0;
        return obj;
    },{});

    function DFS(start_word,count){
        if(start_word ===  target){
            answer = Math.min(answer,count);
        }
        else{
            let tempList = getList(start_word,words)
            for (let x of tempList){
                if(chlist[x]===0){
                    chlist[x]=1;
                    DFS(x,count+1);
                    chlist[x]=0;
                }
            }
        }
    }
    DFS(begin,0);

    if(answer===Number.MAX_SAFE_INTEGER) return 0;
    else return answer;
}