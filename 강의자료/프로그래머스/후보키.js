function solution(relation){
    let answer = [];
    let dic = {};
    let N = relation[0].length; // col nums
    let comb = [];
    function DFS(start_idx, temp){
        if (start_idx===N){
            comb.push([...temp.sort()]);
        }
        else{
            temp.push(start_idx);
            DFS(start_idx+1,temp);
            temp.pop();
            DFS(start_idx+1,temp);
        }
    }

    DFS(0,[]);
    comb.sort((a,b)=>a.length-b.length);
    comb.shift();
    console.log(comb);
    comb.forEach((combi)=>{
        let flag = false;
        
        let combi_str = combi.join("");
        for(let dic_key in dic){
            let count = 0;
            for(let i =0; i<dic_key.length; i++){
                if(combi_str.includes(dic_key[i])) count++
            }
            if (dic_key.length === count) flag=true;
        }

        if (flag === false){

            let tempList = [];
            relation.forEach((row)=>{
                let tempString = ""
    
                combi.forEach((num)=>{
                    tempString+=row[num];
                })
                tempList.push(tempString)
            })
            //console.log(tempList,tempList.length)
            let setList = [...new Set(tempList)]
            //console.log(setList,setList.length)
    
            if (tempList.length === setList.length){
                dic[combi.join("")] = 1;
            } 
        }
        
    });
    console.log(dic);
    return Object.keys(dic).length;
}

console.log(solution([['a',1,'aaa','c','ng'],['b',1,'bbb','c','g'],['c',1,'aaa','d','ng'],['d',2,'bbb','d','ng']]))