function solution(routes) {
    let answer=0;
    while(routes.length){
        let loadLine = [];
        for(let x of routes){
            loadLine.push([x[0],"s"]);
            loadLine.push([x[1],"e"]);
        }

        loadLine.sort((a,b)=>{
            if (a[0]===b[0]){
                if(a[1]==="s") return -1;
                else return 1;
            }
            return a[0]-b[0]; 
        });
   
        let maxcount=0;
        let tmpcount=0;
        let endpoint = Number.MIN_SAFE_INTEGER;
        
        for(let x of loadLine){
            if(x[1]==="s"){
                tmpcount++;
            }
            else{
                if(tmpcount > maxcount){
                    maxcount = tmpcount;
                    endpoint = x[0];
                }
                tmpcount--;
            }
        }

        routes = routes.filter((route)=>{
            if(!(route[0] <= endpoint && route[1] >= endpoint)) {
                return true;
            }
        });
        console.log(routes);
        answer++;
    }
    return answer;
}

console.log(solution([[1,14]]));