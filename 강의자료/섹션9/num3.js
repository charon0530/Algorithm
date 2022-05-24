function solution(n, arr){
    let answer = 0;
    let gragh = Array.from(Array(n+1),()=>new Array());
    for(let [a,b] of arr){
        gragh[a].push(b);
    }
    let tempArr = [];
    let chlist = new Array(n+1).fill(0);
    function DFS(start_node){
        if(start_node === n){
            console.log(tempArr);
            answer++;
        }
        else{
            for (let i=0; i<gragh[start_node].length; i++){
                if(chlist[gragh[start_node][i]]===0){ //방문 안했고 갈 수 있는곳이면
                    chlist[gragh[start_node][i]]=1;
                    tempArr.push(gragh[start_node][i]);
                    DFS(gragh[start_node][i]);
                    chlist[gragh[start_node][i]]=0;
                    tempArr.pop();
                }
            }
        }
    }
    chlist[1]=1;
    tempArr.push(1);
    DFS(1);
    return answer;
 }

 let arr=[[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]];
console.log(solution(5, arr));